import { generateDisplayname } from "@util/generateDisplayname";
import { getRandomInt } from "@util/getRandomInt";
import { getHash } from '@util/getHash';
import { generateUsername } from '@util/generateUsername';
import { generateLoremText } from '@util/generateLoremText';

export function GET({ params, request }) {
    let userName = generateUsername(getRandomInt(1,15));
    let displayName = generateDisplayname(1, 3);
    let userAvatar = getHash();
    let posts = [...Array(20)].map(() => getHash());
    let stories = [...Array(4)].map(() => { 
        return {hash: getHash(), label: generateLoremText(1,1) } });
    let numberOfFollowers = getRandomInt( 1, 200 );
    let numberOfFollowing = getRandomInt( 1, 200 );
    let bio = generateLoremText(2,20);

    return new Response(
        JSON.stringify({
            userName: userName,
            displayName: displayName,
            userAvatar: userAvatar,
            posts: posts,
            stories: stories,
            numberOfFollowers: numberOfFollowers,
            numberOfFollowing: numberOfFollowing,
            bio: bio
        }),
    );
}