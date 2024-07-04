class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

function move_to_logIn(){
    document.getElementById('sign_in').style.display = "none";
    document.getElementById('log_in').style.display = "block";
}
function move_to_sign_In(){
    document.getElementById('sign_in').style.display = "block";
    document.getElementById('log_in').style.display = "none";
}

function signIn(event) {
    event.preventDefault();
    const new_user_name = document.getElementById('name').value;
    const new_user_email = document.getElementById('email').value;
    const new_user_password = document.getElementById('password').value;
    const new_user = new User(new_user_name, new_user_email, new_user_password);
    let players_arr = JSON.parse(localStorage.getItem('game_players'));
    if (players_arr == null) {
        players_arr = [];
    }
    for (let i = 0; i < players_arr.length; i++) {
        if(players_arr[i].email == new_user_email){
            if (players_arr[i].name == new_user_name){
                alert('a user with this name and email exists, you need to log in');
                return;
            }
            else{
                alert('this email already exists, enter a different email');
                return;
            }
        } 
    }
    players_arr.push(new_user);
    localStorage.setItem('game_players',JSON.stringify(players_arr));
    save_user(new_user_name, new_user_email, new_user_password);
    enter_the_game();
    return;
}

function logIn(event) {
    event.preventDefault();
    const user_name = document.getElementById('name2').value;
    const user_password = document.getElementById('password2').value;
    let players_arr = JSON.parse(localStorage.getItem('game_players'));
    if (players_arr == null) {
        alert('please sign up!');
        return;
    }
    for (let i = 0; i < players_arr.length; i++) {
        if (players_arr[i].name == user_name) {
            // alert('true');
            if (players_arr[i].password != user_password){
                if(does_user_exist(players_arr, i+1, user_name)){
                    continue;
                }
                alert('incorrect password, try again!'); 
                return;
            }
            else{
                save_user(user_name, players_arr[i].email, user_password);
                enter_the_game();
                return;
            }
        }
    }
    alert('you need to sign in!');
    return;
}

function does_user_exist(array_users, index, name){
    for (let i = index; i < array_users.length; i++) {
        if (array_users[i].name == name) {
            return true;            
        }
    }
    return false;
}

function save_user(name, email, password) {
    let current_user = new User(name, email, password);
    localStorage.setItem('current_player',JSON.stringify(current_user));
}

function enter_the_game() {
    window.location.href = "./home_page.html";
}