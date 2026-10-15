interface User {
    name: string;
}

function renderUserCard(user: User): string {
    return `<div class="card"><h2>${user.name.toUpperCase()}</h2></div>`;
}

const user: User = { name: "Alice" };

console.log(renderUserCard(user));

const userCardHTML = renderUserCard(user);
const container = document.getElementById("user-card-container");
if (container) {
    container.innerHTML = userCardHTML;
}
new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' });
// TS fix:
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("user-card-container");
    if (container) {
        container.innerHTML = renderUserCard(user);
    }
});
class UserCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const user: User = { name: "Alice" };
        shadow.innerHTML = renderUserCard(user);
    }
}
customElements.define('user-card', UserCard);
