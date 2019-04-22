document.addEventListener("DOMContentLoaded", event => {
    
})

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider)
        
            .then(result => {
                const user = result.user;  
                document.write(`Username:${user.displayName}`)
            })  

    const db = firebase.database();
    const dbRef = db.ref();
        
    dbRef.on('value', snap => console.log(`logging:${snap.val()}`))
}

