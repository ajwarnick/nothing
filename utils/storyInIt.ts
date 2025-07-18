export function storyInIt() {
    const stories = document.querySelectorAll(".story__Story");

    stories.forEach((s) => {
        function Timer(callback, delay) {
            var timerId, start, remaining = delay;

            this.pause = function() {
                window.clearTimeout(timerId);
                remaining -= new Date() - start;
            };

            this.resume = function() {
                start = new Date();
                window.clearTimeout(timerId);
                timerId = window.setTimeout(callback, remaining);
            };

            this.resume();
        }

        let timer = new Timer(function() {
                // console.log("basic");
            }, 1000000);;
        let avtiveNumber = 0;
        let isPlaying = false;

                
        const lines = s.querySelectorAll(".story__Story_Header_Line");
        const gradients = s.querySelectorAll(".backgroundGradient__parent");
        gradients.forEach((gradient) => {
            gradient.addEventListener("mousedown", (event) => {
                s.classList.add("paused");
                timer.pause();
            });

            gradient.addEventListener("mouseup", (event) => {
                s.classList.remove("paused");
                timer.resume();
            });
        });

        s.startAnimation = () => {
            lines[0].classList.add('active');
            timer = new Timer(function() {
                // console.log("next");
                s.nextStory();
            }, 4000);
        }

        s.nextStory = () => {
            lines[avtiveNumber].classList.add('done');

            if(avtiveNumber < lines.length - 1){
                gradients[avtiveNumber].style.display = 'none';
                lines[avtiveNumber+1].classList.add('active');
                avtiveNumber++;
                
                timer = new Timer(function() {
                    s.nextStory();
                }, 4000);
            }else{
                s.storiesFinish();
            }
        }

        // add skip story

        s.storiesFinish = () => {
            // console.log("Finish");
            const slider = document.querySelector('.slider__Slider');
            slider.bang();
        }
    })
}