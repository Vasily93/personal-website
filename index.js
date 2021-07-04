const vanilla = document.getElementById('vanilla');
const node = document.getElementById('node');
const react = document.getElementById('react');
const vue = document.getElementById('vue');

console.log(allProjects);

const render = (tab) => {
    if(tab) {
        const div = document.createElement('div');
        div.setAttribute('class', 'row');
        tab.appendChild(div);

        allProjects.forEach((project) => {
            if(project.tags.includes(tab.id)) {
                let projectCard = `
                    <div class="col s12">
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
                    </div>  
                `;
                div.innerHTML = projectCard;
            }
        })

        
        console.log(tab.id)
    }
}

render(vanilla)
render(node)
render(react)
render(vue)