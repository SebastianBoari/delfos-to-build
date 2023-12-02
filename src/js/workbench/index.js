import MyDay from '@templates/MyDay'

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

                if (!event.target.id.includes('myday')) return

                const tasksContainer = document.getElementById('workbench-tasks-container')
                tasksContainer.innerHTML = ''
                tasksContainer.innerHTML = MyDay()
            }
        })
    }

    setListeners('option-myday-label', 'option-myday-input', ['option-important-label', 'option-planned-label', 'option-myuser-label', 'option-tasks-label'])
    setListeners('option-important-label', 'option-important-input', ['option-myday-label', 'option-planned-label', 'option-myuser-label', 'option-tasks-label'])
    setListeners('option-planned-label', 'option-planned-input', ['option-myday-label', 'option-important-label', 'option-myuser-label', 'option-tasks-label'])
    setListeners('option-myuser-label', 'option-myuser-input', ['option-myday-label', 'option-important-label', 'option-planned-label', 'option-tasks-label'])
    setListeners('option-tasks-label', 'option-tasks-input', ['option-myday-label', 'option-important-label', 'option-planned-label', 'option-myuser-label'])


    const groups = document.querySelectorAll('.group')
    groups.forEach(group => {
        group.addEventListener('click', (event) => {
            const groupLists = group.querySelector('.group_lists')
            groupLists.classList.toggle('group_lists-active')

            const groupTitle = group.querySelector('.group_title')
            groupTitle.classList.toggle('group_title-active')

            const groupArrow = group.querySelector('#arrow-icon')
            groupArrow.classList.toggle('rotate')

            groupLists.addEventListener('click', (event) => {
                event.stopPropagation()
            })
        })

        group.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            const groupPanel = group.querySelector('.group_panel')
            groupPanel.classList.toggle('group-panel-active')

            document.addEventListener('click', (event) => {
                const isClickInsideListAlt = group.contains(event.target)
                if (!isClickInsideListAlt) {
                    groupPanel.classList.remove('group-panel-active')
                }
            })

            document.addEventListener('contextmenu', (event) => {
                const isClickInsideListAlt = group.contains(event.target)
                if (!isClickInsideListAlt) {
                    groupPanel.classList.remove('group-panel-active')
                }
            })
        })
    })


    const lists = document.querySelectorAll('.list_item-link');
    document.addEventListener('click', (event) => {
        const isClickInsideList = Array.from(lists).some((list) => list.contains(event.target))

        if (!isClickInsideList) {
            lists.forEach((list) => {
                list.classList.remove('list_item-link-active')
            })
        }
    })

    lists.forEach((list) => {
        list.addEventListener('click', (event) => {
            event.stopPropagation()

            lists.forEach((item) => {
                if (item !== list) item.classList.remove('list_item-link-active')
            })

            list.classList.toggle('list_item-link-active')
        })
    })

    const listsAlt = document.querySelectorAll('.group_lists-item-link');
    document.addEventListener('click', (event) => {
        const isClickInsideListAlt = Array.from(listsAlt).some((list) => list.contains(event.target))

        if (!isClickInsideListAlt) {
            listsAlt.forEach((list) => {
                list.classList.remove('group_lists-item-link-active')
            })
        }
    })
    listsAlt.forEach((list) => {
        list.addEventListener('click', (event) => {
            event.stopPropagation()

            listsAlt.forEach((item) => {
                if (item !== list) {
                    item.classList.remove('group_lists-item-link-active')
                }
            })

            list.classList.toggle('group_lists-item-link-active')
        })
    })



}

export default workbenchScript