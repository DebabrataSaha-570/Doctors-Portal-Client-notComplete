import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";

const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}
export default initializeFirebase;


/*
Steps for authentication 
----------------
Step-1: Initialize Setup 
1. firebase: Create Project 
2. Create web app
3. get configuration
4. initialize firebase 
5. enable auth method 

-------------------
Step-2: Setup component 
1. Create Login component 
2. Create Register Component 
3. Create Route for login and Register 
---------------------

Step-3: Set Auth system 
1. Set up sign in method 
2. Setup up sign out method 
3. User state
4. Special Observer 
5. return necessary methods and states from useFirebase 
---------------------

Step-4: Create auth context hook (useAuth)
1. create a auth context 
2. create context provider 
3. set context provider context value . 
4. use Auth Provider in app.js 
5. create useAuth hook 

--------------------
step-5: Create private route. 
1. create private route
2. set private route 
---------------------
step-6: Redirect after login. 
1. after login redirect user to their desired destination. 


*/