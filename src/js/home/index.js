
const homeScript = async () => {
    console.log('home')


    const accordionItems = document.querySelectorAll('.detail')

    accordionItems.forEach(item => {
        const header = item.querySelector('.detail_title')
        const content = item.querySelector('.detail_description')

        header.addEventListener('click', () => {
            header.classList.toggle('expanded')
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px'
        })
    })
}

export default homeScript