

const workbenchScript = async (session) => {

    const workbenchAsideHeader = document.getElementById('workbench-aside-header')
    workbenchAsideHeader.addEventListener('click', () => {
        const profilePanel = document.getElementById('profile-panel')
        profilePanel.classList.toggle('profile-panel-active')
    })

    const setListeners = (labelId, inputId, otherLabels) => {
        const label = document.getElementById(labelId)
        const input = document.getElementById(inputId)

        input.addEventListener('change', (event) => {
            if (event.target.checked) {
                label.classList.add('input-checked')

                otherLabels.forEach((item) => {
                    const otherLabel = document.getElementById(item)
                    otherLabel.classList.remove('input-checked')
                })
            }
        })
    }

    setListeners('option-myday-label', 'option-myday-input', ['option-important-label', 'option-planned-label', 'option-myuser-label', 'option-tasks-label'])
    setListeners('option-important-label', 'option-important-input', ['option-myday-label', 'option-planned-label', 'option-myuser-label', 'option-tasks-label'])
    setListeners('option-planned-label', 'option-planned-input', ['option-myday-label', 'option-important-label', 'option-myuser-label', 'option-tasks-label'])
    setListeners('option-myuser-label', 'option-myuser-input', ['option-myday-label', 'option-important-label', 'option-planned-label', 'option-tasks-label'])
    setListeners('option-tasks-label', 'option-tasks-input', ['option-myday-label', 'option-important-label', 'option-planned-label', 'option-myuser-label'])


}

export default workbenchScript