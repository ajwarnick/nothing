import { generateDisplayname } from "@util/generateDisplayname";
import { getRandomInt } from "@util/getRandomInt";
import { getHash } from '@util/getHash';
import { generateUsername } from '@util/generateUsername';
import { generateLoremText } from '@util/generateLoremText';
import { getRandTime } from '@util/getRandTime';

export function GET({ params, request }) {
    let id = getRandomInt( 1, 200000 );
    let userName = generateUsername(getRandomInt(1,15));
    let displayName = generateDisplayname(1, 3);
    let hash = getHash();
    let time  = getRandTime();
    let following = getRandomInt( 1, 200 );
    let online = false;
    let message = generateLoremText(1 , getRandomInt(1,12))

    return new Response(
        JSON.stringify({
            id: id,
            userName: userName,
            displayName: displayName,
            hash: hash,
            time: time,
            following: following,
            online: online,
            message: "test" 
        }),
    );
}