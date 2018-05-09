import { createStore } from 'redux';
import './styles.css';

function greeter(person: any) {
    return "Hello, " + person;
}

let user = "world!";

document.body.innerHTML = greeter(user);
