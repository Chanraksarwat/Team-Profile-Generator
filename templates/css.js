const style = `
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
    padding: 0;
    margin: 0;
}

body {
    font-family: 'Montserrat', sand serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-family: 'Montserrat', sands serif;
    font-size: 5rem;
    letter-spacing: 3px;
    text-transform: uppercase;
}

p {
    font-family: 'Roboto', sans-serif;
    position: relative;
    left: 12px;
}

h2 {
    font-family: 'Roboto', sans-serif;
    position: relative;
    color: #fff;
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 17px;
    left: 12px;
}

.banner-bar {
    background-color: #B00020;
    width: 100%;
    height: 150px;
    color: #ffffff;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
}

.member-card {
    width: 250px;
    height: 34vh;
    margin-bottom: 5vh;
    background-color: #e0e0e0;
    border-radius: 10px;
}

.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}

.card-top {
    background-color: #0336ff;
    border: 2px solid #0336ff;
    border-radius: 10px 10px 0 0;
    width: 246px;
}

.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
    overflow:hidden;
}
`

module.exports = style;