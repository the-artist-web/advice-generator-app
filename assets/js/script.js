const pushJson = document.querySelector("[data-push-json]");

pushJson.innerHTML = `
<div class="container">
    <div class="box-zena">
    <p class="id-advice-zena"></p>
    <h1 class="tip-advice-zena"></h1>
    <h1 class="tip-advice-zena"></h1>
    <h1 class="tip-advice-zena"></h1>
    
    <div class="img-zena"></div>

    <button class="btn-zena" data-btn-new-advice></button>
    </div>
</div>
`;

fetch("./assets/json/data.json")
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
})
.then(data => {
    pushJson.innerHTML = ``;

    const tips = data.tips;
    
    function showRandomAdvice() {
        const randomIndex = Math.floor(Math.random() * tips.length);
        const item = tips[randomIndex];
        
        pushJson.innerHTML = `
        <div class="container">
            <div class="box">
                <p class="id-advice">ADVICE # ${item.id}</p>
                <h1 class="tip-advice">${item.tip}</h1>
                
                <figure>
                    <img src="./assets/images/pattern-divider-desktop.svg" class="pattern-divider-desktop img-cover" alt="pattern-divider-desktop">
                    <img src="./assets/images/pattern-divider-mobile.svg" class="pattern-divider-mobile img-cover" alt="pattern-divider-mobile">
                </figure>
    
                <button class="btn" data-btn-new-advice>
                    <img src="./assets/images/icon-dice.svg" alt="icon-dice">
                </button>
            </div>
        </div>
        `;

        document.querySelector("[data-btn-new-advice]").addEventListener("click", showRandomAdvice);
    }

    showRandomAdvice();
});
