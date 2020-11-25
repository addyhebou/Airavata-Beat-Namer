export {};

// can clear up to four IDs, given the idNames are provided
export function betterClear(idName, idName2 = "", idName3 = "", idName4 = ""){
    let field = document.getElementById(idName);
    field.innerHTML = '';
    if (idName2){
        let field2 = document.getElementById(idName2);
        field2.innerHTML = '';
        if (idName3){
            let field3 = document.getElementById(idName3);
            field3.innerHTML = '';
            if (idName4){
                let field4 = document.getElementById(idName4);
                field4.innerHTML = '';
            }
        }
    }
}
// gives the youtube description
export function additionalTags(tags = '', tags2 = '', artistName = '', artistName2 = ''){
    // get the youtubeDescription field
    let tagField = document.getElementById("tags");
    let tagField2 = document.getElementById("tags2");

    const checkBox = document.getElementById("myCheck") as HTMLInputElement;
    if (checkBox.checked == true){
    tags += `
        ${artistName} type beat with hook free,
        ${artistName} type beat 2021 with hook,
        ${artistName} type beat 2021 with hook free,
        ${artistName} type beat 2020 with hook,
        ${artistName} type beat 2020 with hook free,
        ${artistName} type beat 2019 with hook,
        ${artistName} type beat 2019 with hook free,
        ${artistName} type instrumental,
        ${artistName} type instrumental free,
        ${artistName} type instrumental with hook,
        ${artistName} type instrumental with hook free,
        ${artistName} type instrumental free for profit,
        ${artistName} type instrumental 2021,
        ${artistName} type instrumental 2021 with hook,
        ${artistName} type instrumental 2021 with hook free,
        ${artistName} type instrumental 2020,
        ${artistName} type instrumental 2020 with hook,
        ${artistName} type instrumental 2020 with hook free,
        ${artistName} type instrumental 2019,
        ${artistName} type instrumental 2019 with hook,
        ${artistName} type instrumental 2019 with hook free,
        `
        // add EXTRA tags to the existing tags 2
        tags2 += `
        ${artistName2} type beat with hook free,
        ${artistName2} type beat 2021 with hook,
        ${artistName2} type beat 2021 with hook free,
        ${artistName2} type beat 2020 with hook,
        ${artistName2} type beat 2020 with hook free,
        ${artistName2} type beat 2019 with hook,
        ${artistName2} type beat 2019 with hook free,
        ${artistName2} type instrumental,
        ${artistName2} type instrumental free,
        ${artistName2} type instrumental with hook,
        ${artistName2} type instrumental with hook free,
        ${artistName2} type instrumental free for profit,
        ${artistName2} type instrumental 2021,
        ${artistName2} type instrumental 2021 with hook,
        ${artistName2} type instrumental 2021 with hook free,
        ${artistName2} type instrumental 2020,
        ${artistName2} type instrumental 2020 with hook,
        ${artistName2} type instrumental 2020 with hook free,
        ${artistName2} type instrumental 2019,
        ${artistName2} type instrumental 2019 with hook,
        ${artistName2} type instrumental 2019 with hook free,
        free beat, type beat, saint steph, saint steph type beat, free, saint steph music
        `
        let description = `${tags}${tags2}`
        let descriptionNode = document.createTextNode(description);
        tagField2.appendChild(descriptionNode)
    }
    // let additionalTagNode1 = document.createTextNode(tags);
    // let additionalTagNode2 = document.createTextNode(tags2);
    // tagField += additionalTagNode1;
    // tagField2 += additionalTagNode2;
    // let description = "[Insert Title]\n 🛒 Purchase Beat (Instant Delivery): [BEATSTARS LINK]\n🌐 Social Media: @addyhebou, @saintstephmusic\n📩 Email: hi@saintstephmusic.com\n\n[QUIRKY MESSAGE]\n\nThank you for listening to my music - let me know what you think below and I'll get back to you! You're the best - subscribe to get more Saint Steph !!\n\nUSAGE RIGHTS FOR FREE USE\n\n* You can use this beat for non-commercial and/or promotional use if you wish\n* You must credit the producer as shown in the title of this video\n* (Prod. by Saint Steph) if you choose to use this beat for non-commercial and/or promotional use\n\n____________________________\n\nWhat's okay for promotional use? I'm glad you asked, buddy.\n\n✅ Soundcloud (no ads enabled)\n✅ YouTube (no ads enabled)\n\nWhat's NOT okay for promotional use? Once again, I'm glad you asked.\n\n🚫 Uploading to streaming service (Apple Music, Spotify, DistroKid, etc.) is NOT permitted\n🚫 No paid performances\n\nIf you were to purchase this beat untagged for lease or exclusive license, please HIT ME UP. Contact me at my info listed above.\n\n______________\nOtherwise, let's get this bread\n\n\n\n\n=======\n$";
    ;


}


// export {};
// Gives the Youtube tags
export function tag(){
    // clears the tag and title field
    betterClear('tags', 'titleParagraph');

    // The variable paragraph is for all the tags of artist 1; paragraph 2 is for all the tags of artist 2


    let paragraph = document.getElementById('tags');
    let paragraph2 = document.getElementById('tags2');
    let artistName = document.getElementById("name") as HTMLInputElement;
    artistName.value.toLowerCase();
    let artistName2 = document.getElementById("name2") as HTMLInputElement;
    artistName2.value.toLowerCase();
    let album = document.getElementById("album") as HTMLInputElement;
    album.value.toLowerCase();
    let album2 = document.getElementById("album2") as HTMLInputElement;
    album2.value.toLowerCase();
    let mood = document.getElementById("mood") as HTMLInputElement;
    mood.value.toLowerCase();
    let mood2 = document.getElementById("mood2") as HTMLInputElement;
    mood2.value.toLowerCase();
    let genre = document.getElementById("genre") as HTMLInputElement;
    genre.value.toLowerCase();
    let genre2 = document.getElementById("genre2") as HTMLInputElement;
    genre2.value.toLowerCase();
    let instrument = document.getElementById("instrument") as HTMLInputElement;
    instrument.value.toLowerCase();
    let instrument2 = document.getElementById("instrument2") as HTMLInputElement;
    instrument2.value.toLowerCase();

    // initialize tags for artist 1
    let tags = `
    ${artistName} type beat,
    ${artistName} type beat 2021,
    ${artistName} type beat free,
    ${artistName} type beat 2020,
    ${artistName} type beat free for profit,
    ${artistName} type beat with hook,
    free ${artistName} type beat,
    `

    // initialize tags for artist 2
    let tags2 = `
    ${artistName2} type beat,
    ${artistName2} type beat 2021,
    ${artistName2} type beat free,
    ${artistName2} type beat 2020,
    ${artistName2} type beat free for profit,
    ${artistName2} type beat with hook,
    free ${artistName2} type beat,
    `

    // additional tags for artist 1
    if (mood.innerHTML != ''){ tags += `${artistName} type beat ${mood},`;}
    if (album.innerHTML != ''){ tags += `${artistName} type beat ${album},`;}
    if (instrument.innerHTML != ''){ tags += `${artistName} type beat ${instrument},`;}
    if (genre.innerHTML != ''){ tags += `${artistName} type beat ${genre},`;}

    // node the tags to add to the paragraph
    let tagsNode = document.createTextNode(tags);
    paragraph.appendChild(tagsNode);

    // additional tags for artist 2
    if (artistName2.innerHTML != ''){
        if (mood2.innerHTML != ''){ tags2 += `${artistName2} type beat ${mood2},`;}
        if (album2.innerHTML != ''){ tags2 += `${artistName2} type beat ${album2},`;}
        if (instrument2.innerHTML != ''){ tags2 += `${artistName2} type beat ${instrument2},`;}
        if (genre2.innerHTML != ''){ tags2 += `${artistName2} type beat ${genre2},`;}
        // node the 2nd tags to add to the paragraph 2
        let tags2Node = document.createTextNode(tags2);
        paragraph2.appendChild(tags2Node);
    }
    console.log(tags2);
    // create Instagram caption by calling outside export function
    instagramCaption(artistName, artistName2, mood);
    additionalTags(tags, tags2, artistName.innerHTML, artistName2.innerHTML);

    
}

// Gives the Youtube Name
export function videoName(){
    let artistName = document.getElementById("name").innerHTML;
    let artistName2 = document.getElementById("name2").innerHTML;
    let descriptiveItem = document.getElementById("mood").innerHTML;
    let descriptiveItem2 = document.getElementById("instrument").innerHTML;
    let songName = document.getElementById("songName").innerHTML;
    let genre = document.getElementById("genre").innerHTML;
    let title = `[FREE] ${descriptiveItem} ${descriptiveItem2} ${artistName} x ${artistName2} Type Beat - "${songName}" | ${genre} Beat/Instrumental 2021`;
    let titleNode = document.createTextNode(title);
    // titleParagraph.appendChild(titleNode);
}



// Gives IG Caption and tags
export function instagramCaption(name1, name2, mood){
    let songName = document.getElementById("songName").innerHTML;
    let caption = `New FREE ${mood} ${name1} x ${name2} Type Beat - ${songName} ❄️ YOUTUBE in BIO ⚡️ DM for ENQUIRES`;
    let tags = 
    `
    #typebeat #beats #producer #typebeats #{genre} #beatmaker #beat #beatsforsale #flstudio  #music #instrumental #{genre}beats #musicproducer #beatstars #freebeats #instrumentals #trapbeat #rapbeats #soundcloud #beatmaking #needbeats #hiphopbeats #musicproduction #producerlife #rappers #artist #bhfyp
    `;
    tags +=
    `
    #trap #rap #rapper
    `;
    
    let IGCaptionField = document.getElementById('IGcaption');
    let IGtagField = document.getElementById('IGtags');
    let captionNode = document.createTextNode(caption);
    let tagsNode = document.createTextNode(tags);
    IGCaptionField.appendChild(captionNode);
    IGtagField.appendChild(tagsNode);
}


export function message(){
    // Variables to work with: The artist name, their primary genre, and secondary genre
    let artistName = document.getElementById("artistName").innerHTML;
    let genre = document.getElementById("genre").innerHTML;
    let genre2 = document.getElementById("genre2").innerHTML;
    let comment = document.getElementById("comment");
    let platform = document.getElementById("platform");
    const checkBox = document.getElementById("checkIfSales") as HTMLInputElement;

    if (checkBox.checked == false){ //so if the person is NOT an artist I would like to sell to
        // The messages: the intro one and the secondary one
        let message1 = 
        `Yo yoooo ${artistName}! My name is Addy - I came across your music and I'd like to just say first and foremost`;
        
        // SEND PICTURE OF SONG

        let secondGenre = '';
        if (genre2 != ''){
            let secondGenre = `and ${genre2} `;
        }
        let message2 =
        `
            This is a mood G!
            I'm a producer from Maryland but based in New York! I heard your music and would really like to produce records with you!
            I have music that I can send you to showcase my range in ${genre} ${secondGenre}but I'm down to collaborate online to crafting records!
            Let me know the vibesssssss
        `;
        // Clear up existing fields
        betterClear("message");
        betterClear("message2");

        // Messages converted into nodes to attach to fields
        let messageNode = document.createTextNode(message1);
        let messageNode2 = document.createTextNode(message2);
        let messageField = document.getElementById("message");
        let messageField2 = document.getElementById("message2");
        messageField.appendChild(messageNode);
        messageField2.appendChild(messageNode2);
    }
    else{
        // The comment and messages: the intro one and the secondary one
        let comment = 
        `
            YOOOOOOOOO I just checked this out on Soundcloud! 🔥🔥REAL ${genre} vibes!!! DM'ing You Now!!
        `;
        let message1 = 
        `Yo yoooo ${artistName}! My name is Saint Steph - I came across your music and I'd like to just say first and foremost: You've got vibes g! I would like to offer you some free beats that you might be interested in!! Pick whichever pack you'd like and send me your email to that I can get it to you!
        You're a busy person - so free to let me know more about you when you can, ${artistName}!!`;
        
        // flip screen
        let secondGenre = '';
        if (genre2 != ''){
            let secondGenre = `and ${genre2} `;
        }
        let message2 =
        `
        `;
        // `
        //     This is a mood G!
        //     I'm a producer from Maryland but based in New York! I heard your music and would really like to know down business with you!
        //     I know for artists, it's sometimes hard to find beats exactly what you'd like and compliment your style
        //     And its even harder to try to connect directly with those producers on YouTube or Beatstars
        //     So I'd love to know more about who ${artistName} is as an artist, and what you're looking for - 
        //     whether its an upcoming single or full album
        //     You're a busy person - so free to let me know more about you when you can!!
        // `
        // Clear up existing fields
        betterClear("message");
        betterClear("message2");
        betterClear("comment");

        // Messages converted into nodes to attach to fields
        let messageNode = document.createTextNode(message1);
        let messageNode2 = document.createTextNode(message2);
        let commentNode = document.createTextNode(comment);
        let messageField = document.getElementById("message");
        let messageField2 = document.getElementById("message2");
        let commentField = document.getElementById("comment");
        messageField.appendChild(messageNode);
        messageField2.appendChild(messageNode2);
        commentField.appendChild(commentNode);
    }
}


