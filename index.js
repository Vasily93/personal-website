const vanilla = document.getElementById('vanilla');
const node = document.getElementById('node');
const react = document.getElementById('react');
const vue = document.getElementById('vue');

const render = (tab) => {
    if(tab) {
        const div = document.createElement('div');
        div.setAttribute('class', 'row');

        allProjects.forEach((project) => {
            if(project.tags.includes(tab.id)) {
                const divCard = document.createElement('div');
                divCard.setAttribute('class', 'col s12 m6');
                divCard.innerHTML = `
                    <div class="card horizontal">
                        <div class="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6">
                        </div>
                        <div class="card-stacked">
                        <div class="card-content">
                            <h6>${project.name}</h6>
                            <p>${project.description}</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                        </div>
                        </div>
                    </div>
                `;
                div.appendChild(divCard);
            }
        })
        tab.appendChild(div);
    }
}

render(vanilla)
render(node)
render(react)
render(vue)