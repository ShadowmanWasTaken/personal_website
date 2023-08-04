let myLifeTab = document.getElementById("mylife")
let lifeParagraph = document.getElementById("life_paragraph")
let lifeIsRoblox = document.querySelector("audio")

myLifeTab.addEventListener("mouseover", playMusic)
lifeParagraph.addEventListener("mouseover", changeText)
lifeParagraph.addEventListener("mouseout", revertText)

function playMusic(event){
    event.preventDefault()
    lifeIsRoblox.play()
}

function changeText(event){
    event.preventDefault()
    lifeParagraph.innerHTML = "LIFE IS ROBLOX ;)"
}

function revertText(event){
    event.preventDefault()
    lifeParagraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non pulvinar neque laoreet. Semper auctor neque vitae tempus quam pellentesque nec nam. Duis at tellus at urna condimentum mattis pellentesque id nibh. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Netus et malesuada fames ac. Praesent semper feugiat nibh sed pulvinar proin. Amet mauris commodo quis imperdiet massa tincidunt. Commodo elit at imperdiet dui. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi."
}