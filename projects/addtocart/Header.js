function generateHeader () {
    const header = document.createElement('header');
    header.innerHTML = `
       <nav class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"></svg>
                    <span class="ml-3 text-xl">Deep Kothari</span>
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                    <a href="./index.html" class="mr-5 cursor-pointer hover:text-gray-900">Home</a>
                </nav>
                <a href="./checkout.html" id="cartQuantity" class="flex justify-center align-middle items-center bg-indigo-100 text-indigo-700 h-10 w-10 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xl mt-4 md:mt-0">
                    0
                </a>
            </div>
        </nav>
    `
    return header;
}

function addHeaderToElement (elementTagName) {
    const header = generateHeader();
    const targetElement = document.querySelector(elementTagName);
    targetElement.appendChild(header);
}

addHeaderToElement("header");

function msg () {
    console.log("hello")
}