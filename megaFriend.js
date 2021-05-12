function megaFriend(friendsName) { //input an arry which includes all of your friends name
    let largeName = friendsName[0].length;
    for (let i = 0; i < friendsName.length; i++) {
        if (friendsName[i].length > largeName) {
            var longName = friendsName[i];
            largeName = friendsName[i].length;
        }
    }
    return longName;
}
console.log(megaFriend(['Mojnu', 'Sumaiya Sarmin Emu', 'Jui', 'Bangladesh']))