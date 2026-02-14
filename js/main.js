//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getData)

async function getData() {

    const val = document.querySelector('input').value
    const img = document.querySelector('img')
    const url = `https://api.nasa.gov/planetary/apod?api_key=H7VXT5KCZwP7FpJPGyFznvNuwAo3Y6svZeZWn4rM&date=${val}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        const iframe = document.querySelector('iframe')
        //if not an img, create iframe
        if (result.url.endsWith(".jpg") || result.url.endsWith('.png')) {
            img.src = `${result.url}`
            img.alt = `${result.title}`
            iframe.src = ''
        } else {
            iframe.src = `${result.url}`
            iframe.height = '600px'
            iframe.width = '1500px'
            img.src = ''
        }





        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}





















// async function getData() {

//     const val = document.querySelector('input').value

//     const img = document.querySelector('img')
//     const url = `https://api.nasa.gov/planetary/apod?api_key=H7VXT5KCZwP7FpJPGyFznvNuwAo3Y6svZeZWn4rM&date=${val}`;
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }

//         const result = await response.json();
//         console.log(result);

//         img.src = `${result.url}`

//     } catch (error) {
//         console.error(error.message);
//     }
// }

