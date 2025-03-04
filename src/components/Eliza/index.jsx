import { useState, useRef, useEffect } from 'react';
import { generateDisplayname, getRandomInt } from '../Utilities/functions.js';

// import * from './elizabot';
import * as elizadata from './elizadata';

import './Eliza.scss';

/*
  elizabot.js v.1.1 - ELIZA JS library (N.Landsteiner 2005)
  Eliza is a mock Rogerian psychotherapist.
  Original program by Joseph Weizenbaum in MAD-SLIP for "Project MAC" at MIT.
  cf: Weizenbaum, Joseph "ELIZA - A Computer Program For the Study of Natural Language
      Communication Between Man and Machine"
      in: Communications of the ACM; Volume 9 , Issue 1 (January 1966): p 36-45.
  JavaScript implementation by Norbert Landsteiner 2005; <http://www.masserk.at>

  synopsis:

         new ElizaBot( <random-choice-disable-flag> )
         ElizaBot.prototype.transform( <inputstring> )
         ElizaBot.prototype.getInitial()
         ElizaBot.prototype.getFinal()
         ElizaBot.prototype.reset()

  usage: var eliza = new ElizaBot();
         var initial = eliza.getInitial();
         var reply = eliza.transform(inputstring);
         if (eliza.quit) {
             // last user input was a quit phrase
         }

         // method `transform()' returns a final phrase in case of a quit phrase
         // but you can also get a final phrase with:
         var final = eliza.getFinal();

         // other methods: reset memory and internal state
         eliza.reset();

         // to set the internal memory size override property `memSize':
         eliza.memSize = 100; // (default: 20)

         // to reproduce the example conversation given by J. Weizenbaum
         // initialize with the optional random-choice-disable flag
         var originalEliza = new ElizaBot(true);

  `ElizaBot' is also a general chatbot engine that can be supplied with any rule set.
  (for required data structures cf. "elizadata.js" and/or see the documentation.)
  data is parsed and transformed for internal use at the creation time of the
  first instance of the `ElizaBot' constructor.

  vers 1.1: lambda functions in RegExps are currently a problem with too many browsers.
            changed code to work around.
*/

function ElizaBot(noRandomFlag) {
	this.noRandom= (noRandomFlag)? true:false;
	this.capitalizeFirstLetter=true;
	this.debug=false;
	this.memSize=20;
	this.version="1.1 (original)";
	if (!this._dataParsed) this._init();
	this.reset();
}

ElizaBot.prototype.reset = function() {
	this.quit=false;
	this.mem=[];
	this.lastchoice=[];
	for (var k=0; k<elizadata.elizaKeywords.length; k++) {
		this.lastchoice[k]=[];
		var rules=elizadata.elizaKeywords[k][2];
		for (var i=0; i<rules.length; i++) this.lastchoice[k][i]=-1;
	}
}

ElizaBot.prototype._dataParsed = false;

ElizaBot.prototype._init = function() {
	// install ref to global object
	// var global=ElizaBot.prototype.global=self;
	// parse data and convert it from canonical form to internal use
	// prodoce synonym list
	var synPatterns={};
	if ((elizadata.elizaSynons) && (typeof elizaSynons == 'object')) {
		for (var i in elizaSynons) synPatterns[i]='('+i+'|'+elizaSynons[i].join('|')+')';
	}
	// check for keywords or install empty structure to prevent any errors
	if ((!elizadata.elizaKeywords) || (typeof elizadata.elizaKeywords.length == 'undefined')) {
		elizadata.elizaKeywords=[['###',0,[['###',[]]]]];
	}
	// 1st convert rules to regexps
	// expand synonyms and insert asterisk expressions for backtracking
	var sre=/@(\S+)/;
	var are=/(\S)\s*\*\s*(\S)/;
	var are1=/^\s*\*\s*(\S)/;
	var are2=/(\S)\s*\*\s*$/;
	var are3=/^\s*\*\s*$/;
	var wsre=/\s+/g;
	for (var k=0; k<elizadata.elizaKeywords.length; k++) {
		var rules=elizadata.elizaKeywords[k][2];
		elizadata.elizaKeywords[k][3]=k; // save original index for sorting
		for (var i=0; i<rules.length; i++) {
			var r=rules[i];
			// check mem flag and store it as decomp's element 2
			if (r[0].charAt(0)=='$') {
				var ofs=1;
				while (r[0].charAt[ofs]==' ') ofs++;
				r[0]=r[0].substring(ofs);
				r[2]=true;
			}
			else {
				r[2]=false;
			}
			// expand synonyms (v.1.1: work around lambda function)
			var m=sre.exec(r[0]);
			while (m) {
				var sp=(synPatterns[m[1]])? synPatterns[m[1]]:m[1];
				r[0]=r[0].substring(0,m.index)+sp+r[0].substring(m.index+m[0].length);
				m=sre.exec(r[0]);
			}
			// expand asterisk expressions (v.1.1: work around lambda function)
			if (are3.test(r[0])) {
				r[0]='\\s*(.*)\\s*';
			}
			else {
				m=are.exec(r[0]);
				if (m) {
					var lp='';
					var rp=r[0];
					while (m) {
						lp+=rp.substring(0,m.index+1);
						if (m[1]!=')') lp+='\\b';
						lp+='\\s*(.*)\\s*';
						if ((m[2]!='(') && (m[2]!='\\')) lp+='\\b';
						lp+=m[2];
						rp=rp.substring(m.index+m[0].length);
						m=are.exec(rp);
					}
					r[0]=lp+rp;
				}
				m=are1.exec(r[0]);
				if (m) {
					var lp='\\s*(.*)\\s*';
					if ((m[1]!=')') && (m[1]!='\\')) lp+='\\b';
					r[0]=lp+r[0].substring(m.index-1+m[0].length);
				}
				m=are2.exec(r[0]);
				if (m) {
					var lp=r[0].substring(0,m.index+1);
					if (m[1]!='(') lp+='\\b';
					r[0]=lp+'\\s*(.*)\\s*';
				}
			}
			// expand white space
			r[0]=r[0].replace(wsre, '\\s+');
			wsre.lastIndex=0;
		}
	}
	// now sort keywords by rank (highest first)
	elizadata.elizaKeywords.sort(this._sortKeywords);
	// and compose regexps and refs for pres and posts
	ElizaBot.prototype.pres={};
	ElizaBot.prototype.posts={};

	if ((elizadata.elizaPres) && (elizadata.elizaPres.length)) {
		var a=new Array();
		for (var i=0; i<elizadata.elizaPres.length; i+=2) {
			a.push(elizadata.elizaPres[i]);
			ElizaBot.prototype.pres[elizadata.elizaPres[i]]=elizadata.elizaPres[i+1];
		}
		ElizaBot.prototype.preExp = new RegExp('\\b('+a.join('|')+')\\b');
	}
	else {
		// default (should not match)
		ElizaBot.prototype.preExp = /####/;
		ElizaBot.prototype.pres['####']='####';
	}
	if ((elizadata.elizaPosts) && (elizadata.elizaPosts.length)) {
		var a=new Array();
		for (var i=0; i<elizadata.elizaPosts.length; i+=2) {
			a.push(elizadata.elizaPosts[i]);
			ElizaBot.prototype.posts[elizadata.elizaPosts[i]]=elizadata.elizaPosts[i+1];
		}
		ElizaBot.prototype.postExp = new RegExp('\\b('+a.join('|')+')\\b');
	}
	else {
		// default (should not match)
		ElizaBot.prototype.postExp = /####/;
		ElizaBot.prototype.posts['####']='####';
	}
	// check for elizaQuits and install default if missing
	if ((!elizadata.elizaQuits) || (typeof elizadata.elizaQuits.length == 'undefined')) {
		elizadata.elizaQuits=[];
	}
	// done
	ElizaBot.prototype._dataParsed=true;
}

ElizaBot.prototype._sortKeywords = function(a,b) {
	// sort by rank
	if (a[1]>b[1]) return -1
	else if (a[1]<b[1]) return 1
	// or original index
	else if (a[3]>b[3]) return 1
	else if (a[3]<b[3]) return -1
	else return 0;
}

ElizaBot.prototype.transform = function(text) {
	var rpl='';
	this.quit=false;
	// unify text string
	text=text.toLowerCase();
	text=text.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g, ' ');
	text=text.replace(/\s+-+\s+/g, '.');
	text=text.replace(/\s*[,\.\?!;]+\s*/g, '.');
	text=text.replace(/\s*\bbut\b\s*/g, '.');
	text=text.replace(/\s{2,}/g, ' ');
	// split text in part sentences and loop through them
	var parts=text.split('.');
	for (var i=0; i<parts.length; i++) {
		var part=parts[i];
		if (part!='') {
			// check for quit expression
			for (var q=0; q<elizadata.elizaQuits.length; q++) {
				if (elizadata.elizaQuits[q]==part) {
					this.quit=true;
					return this.getFinal();
				}
			}
			// preprocess (v.1.1: work around lambda function)
			var m=this.preExp.exec(part);
			if (m) {
				var lp='';
				var rp=part;
				while (m) {
					lp+=rp.substring(0,m.index)+this.pres[m[1]];
					rp=rp.substring(m.index+m[0].length);
					m=this.preExp.exec(rp);
				}
				part=lp+rp;
			}
			this.sentence=part;
			// loop trough keywords
			for (var k=0; k<elizadata.elizaKeywords.length; k++) {
				if (part.search(new RegExp('\\b'+elizadata.elizaKeywords[k][0]+'\\b', 'i'))>=0) {
					rpl = this._execRule(k);
				}
				if (rpl!='') return rpl;
			}
		}
	}
	// nothing matched try mem
	rpl=this._memGet();
	// if nothing in mem, so try xnone
	if (rpl=='') {
		this.sentence=' ';
		var k=this._getRuleIndexByKey('xnone');
		if (k>=0) rpl=this._execRule(k);
	}
	// return reply or default string
	return (rpl!='')? rpl : 'I am at a loss for words.';
}

ElizaBot.prototype._execRule = function(k) {
	var rule=elizadata.elizaKeywords[k];
	var decomps=rule[2];
	var paramre=/\(([0-9]+)\)/;
	for (var i=0; i<decomps.length; i++) {
		var m=this.sentence.match(decomps[i][0]);
		if (m!=null) {
			var reasmbs=decomps[i][1];
			var memflag=decomps[i][2];
			var ri= (this.noRandom)? 0 : Math.floor(Math.random()*reasmbs.length);
			if (((this.noRandom) && (this.lastchoice[k][i]>ri)) || (this.lastchoice[k][i]==ri)) {
				ri= ++this.lastchoice[k][i];
				if (ri>=reasmbs.length) {
					ri=0;
					this.lastchoice[k][i]=-1;
				}
			}
			else {
				this.lastchoice[k][i]=ri;
			}
			var rpl=reasmbs[ri];
			if (this.debug) alert('match:\nkey: '+elizadata.elizaKeywords[k][0]+
				'\nrank: '+elizadata.elizaKeywords[k][1]+
				'\ndecomp: '+decomps[i][0]+
				'\nreasmb: '+rpl+
				'\nmemflag: '+memflag);
			if (rpl.search('^goto ', 'i')==0) {
				var ki=this._getRuleIndexByKey(rpl.substring(5));
				if (ki>=0) return this._execRule(ki);
			}
			// substitute positional params (v.1.1: work around lambda function)
			var m1=paramre.exec(rpl);
			if (m1) {
				var lp='';
				var rp=rpl;
				while (m1) {
					var param = m[parseInt(m1[1])];
					// postprocess param
					var m2=this.postExp.exec(param);
					if (m2) {
						var lp2='';
						var rp2=param;
						while (m2) {
							lp2+=rp2.substring(0,m2.index)+this.posts[m2[1]];
							rp2=rp2.substring(m2.index+m2[0].length);
							m2=this.postExp.exec(rp2);
						}
						param=lp2+rp2;
					}
					lp+=rp.substring(0,m1.index)+param;
					rp=rp.substring(m1.index+m1[0].length);
					m1=paramre.exec(rp);
				}
				rpl=lp+rp;
			}
			rpl=this._postTransform(rpl);
			if (memflag) this._memSave(rpl)
			else return rpl;
		}
	}
	return '';
}

ElizaBot.prototype._postTransform = function(s) {
	// final cleanings
	s=s.replace(/\s{2,}/g, ' ');
	s=s.replace(/\s+\./g, '.');
	if ((elizadata.elizaPostTransforms) && (elizadata.elizaPostTransforms.length)) {
		for (var i=0; i<elizadata.elizaPostTransforms.length; i+=2) {
			s=s.replace(elizadata.elizaPostTransforms[i], elizadata.elizaPostTransforms[i+1]);
			elizadata.elizaPostTransforms[i].lastIndex=0;
		}
	}
	// capitalize first char (v.1.1: work around lambda function)
	if (this.capitalizeFirstLetter) {
		var re=/^([a-z])/;
		var m=re.exec(s);
		if (m) s=m[0].toUpperCase()+s.substring(1);
	}
	return s;
}

ElizaBot.prototype._getRuleIndexByKey = function(key) {
	for (var k=0; k<elizadata.elizaKeywords.length; k++) {
		if (elizadata.elizaKeywords[k][0]==key) return k;
	}
	return -1;
}

ElizaBot.prototype._memSave = function(t) {
	this.mem.push(t);
	if (this.mem.length>this.memSize) this.mem.shift();
}

ElizaBot.prototype._memGet = function() {
	if (this.mem.length) {
		if (this.noRandom) return this.mem.shift();
		else {
			var n=Math.floor(Math.random()*this.mem.length);
			var rpl=this.mem[n];
			for (var i=n+1; i<this.mem.length; i++) this.mem[i-1]=this.mem[i];
			this.mem.length--;
			return rpl;
		}
	}
	else return '';
}

ElizaBot.prototype.getFinal = function() {
	if (!elizadata.elizaFinals) return '';
	return elizaFinals[Math.floor(Math.random()*elizaFinals.length)];
}

ElizaBot.prototype.getInitial = function() {
	if (!elizadata.elizaInitials) return '';
	return elizaInitials[Math.floor(Math.random()*elizaInitials.length)];
}

// fix array.prototype methods (push, shift) if not implemented (MSIE fix)
if (typeof Array.prototype.push == 'undefined') {
	Array.prototype.push=function(v) { return this[this.length]=v; };
}
if (typeof Array.prototype.shift == 'undefined') {
	Array.prototype.shift=function() {
		if (this.length==0) return null;
		var e0=this[0];
		for (var i=1; i<this.length; i++) this[i-1]=this[i];
		this.length--;
		return e0;
	};
}

// eof

function Eliza({open, chadID}) {
	// const timer = useRef();

    var eliza = new ElizaBot();

    const [message, setMessage] = useState('');
    const [elizaLines, setelizaLines] = useState([]);
	const [waiting, setWaiting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        elizaStep(message);
    }

    // function elizaReset() {
    //     eliza.reset();
    //     elizaLines.length = 0;
    //     elizaStep();
    // }

    function elizaStep(userinput) {
		const dice = getRandomInt(1,10);
        let nextID = elizaLines.length;

		if (userinput != '') {
			if(dice == 0){
				setelizaLines([...elizaLines, {
						id: nextID++,
						user: "eliza__you_message",
						message: userinput,
					},
					{
						id: nextID+2,
						user: "eliza__eliza_message",
						message: eliza.transform(userinput),
					}
				]);
			}else if (dice == 1){
				setelizaLines([...elizaLines, {
					id: nextID++,
					user: "eliza__you_message",
					message: userinput,
				}]);

			}else{
				setelizaLines([...elizaLines, {
					id: nextID++,
					user: "eliza__you_message",
					message: userinput,
				}]);

				setWaiting(true);
	
				setTimeout(() => {
					setWaiting(false);
					setelizaLines([...elizaLines, {
						id: nextID++,
						user: "eliza__you_message",
						message: userinput,
					},{
						id: nextID+2,
						user: "eliza__eliza_message",
						message: eliza.transform(userinput),
					}]);
				}, 5000);
			}
		}else if (elizaLines.length == 0) {
			setelizaLines([...elizaLines, {
					id: nextID++,
					user: "eliza__eliza_message",
					message: eliza.getInitial(),
				}
			]);
		}
		setMessage('');
    }

    return (
        <div className='eliza'>
             <ul className='eliza__message_thread'>
                {elizaLines.map(line => (
                    <li key={line.id} className={line.user}>{line.message}</li>
                ))}
            </ul>
			<div className={waiting ? 'eliza__message_thinking isWaiting' : 'eliza__message_thinking'}><div className="dot-pulse"></div></div>
            <form className='eliza__message_form' onSubmit={handleSubmit}>
                <label >
                    <input 
						className='eliza__message_input'
						type="text" 
						value={message}
						placeholder="Message"
						onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <input className='eliza__message_submit' type="submit" value="Send" />
            </form>
           
        </div>
        );
    }
    export default Eliza;