import SearchIcon from '@icons/SearchIcon'
import SunThinIcon from '@icons/SunThinIcon'
import StarIcon from '@icons/StarIcon'
import CalendarIcon from '@icons/CalendarIcon'
import UserAltThickIcon from '@icons/UserAltThickIcon'
import HomeIcon from '@icons/HomeIcon'
import PlusIcon from '@icons/PlusIcon'
import GroupIcon from '@icons/GroupIcon'
import UserAltIcon from '@icons/UserAltIcon'
import ConfigAltIcon from '@icons/ConfigAltIcon'
import SyncIcon from '@icons/SyncIcon'
import ArrowIcon from '@icons/ArrowIcon'
import ListIcon from '@icons/ListIcon'


const Workbench = async (session) => {

    const view = `
    <article id="workbench">
        
        <aside class="workbench_aside">
            <div class="workbench_aside-branding">
                <img class="branding-icon" src="https://i.imgur.com/mJNJKZx.png" alt="delfos to build icon"/>
                <p class="branding-name">Delfos To Build</p>
            </div>
            
            <header class="workbench_aside-header" id="workbench-aside-header">
                <figure class="header_figure">
                    <img class="header_figure-image" src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/4af3e5d8-3352-49bd-9570-de2aef8972b9/eric-bailey-profile.jpg" alt=""/>
                </figure>
                
                <div class="header_welcome">
                    <h2 class="header_welcome-name">Fernando Gomez</h2>
                    <p class="header_welcome-email">fernando@gmail.com</p>
                </div>

                <div id="profile-panel-container">
                    <ul class="profile_panel profile-panel-inactive" id="profile-panel">
                        <label class="prfile_panel-label">
                            <a class="profile_panel-label-link" href="#">
                                ${UserAltThickIcon()}
                                Manage account
                            </a>
                        </label> 
                        
                        <span id="profile-panel-line"></span>

                        <label class="prfile_panel-label">
                            <a class="profile_panel-label-link" href="#">
                                ${ConfigAltIcon()}
                                Configuration
                            </a>
                        </label> 

                        <span id="profile-panel-line"></span>

                        <label class="prfile_panel-label">
                            <a class="profile_panel-label-link" href="#">
                                ${SyncIcon()}
                                Synchronizing
                            </a>
                        </label> 
                    </ul>
                </div>
            </header>

            <form class="workbench_aside-form" id="workbench_form">
                <label class="form_label">
                    <input class="form_label-input" id="workbench_form-input" type="text" placeholder="Search"/>
                    ${SearchIcon()}
                </label>  

                <div class="form_options">
                    <label class="form_options-label" id="option-myday-label">
                        <span class="checked"></span>
                        ${SunThinIcon()}
                        My day
                        <input class="form_options-label-input" id="option-myday-input" type="radio" name="options"/>
                        <span class="form_options-label-span" id="myday-counter">12</span>
                    </label>

                    <label class="form_options-label" id="option-important-label">
                        <span class="checked"></span>
                        ${StarIcon()}
                        Important
                        <input class="form_options-label-input" id="option-important-input" type="radio" name="options"/>
                        <span class="form_options-label-span" id="important-counter">4</span>
                    </label>

                    <label class="form_options-label" id="option-planned-label">
                        <span class="checked"></span>
                        ${CalendarIcon()}
                        Planned
                        <input class="form_options-label-input" id="option-planned-input" type="radio" name="options"/>
                        <span class="form_options-label-span" id="planned-counter">4</span>
                    </label>

                    <label class="form_options-label" id="option-myuser-label">
                        <span class="checked"></span>
                        ${UserAltIcon()}
                        Assigned to my user
                        <input class="form_options-label-input" id="option-myuser-input" type="radio" name="options"/>
                        <span class="form_options-label-span" id="myuser-counter">4</span>
                    </label>

                    <label class="form_options-label" id="option-tasks-label">
                        <span class="checked"></span>
                        ${HomeIcon()}
                        Tasks
                        <input class="form_options-label-input" id="option-tasks-input" type="radio" name="options"/>
                        <span class="form_options-label-span" id="tasks-counter">4</span>
                    </label>
                </div>
            </form>
            

            <div class="workbench_tasks-groups">
                <div class="workbench_tasks-groups-container" id="workbench-tasks-groups-container">

                    <div class="group">
                        <div class="group_title">
                            <div class="group_title-left">
                                ${GroupIcon()}
                                <h4 class="group_title-left-text">Test group</h4>
                            </div>

                            ${ArrowIcon()}
                        </div>

                        <ul class="group_lists">
                            <li class="group_lists-item">
                                <p class="group_lists-item-link">
                                    <span id="list-line"></span>
                                    ${ListIcon()}
                                    Supermercado
                                </p>
                            </li>

                            <li class="group_lists-item">
                                <p class="group_lists-item-link">
                                    <span id="list-line"></span>
                                    ${ListIcon()}
                                    Estudios
                                </p>
                            </li>

                            <li class="group_lists-item">
                                <p class="group_lists-item-link">
                                    <span id="list-line"></span>
                                    ${ListIcon()}
                                    Otros
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div class="group">
                        <div class="group_title">
                            <div class="group_title-left">
                                ${GroupIcon()}
                                <h4 class="group_title-left-text">Test group</h4>
                            </div>

                            ${ArrowIcon()}
                        </div>

                        <ul class="group_lists">
                            <li class="group_lists-item">
                                <p class="group_lists-item-link">
                                    <span id="list-line"></span>
                                    ${ListIcon()}
                                    Supermercado
                                </p>
                            </li>

                            <li class="group_lists-item">
                                <p class="group_lists-item-link">
                                    <span id="list-line"></span>
                                    ${ListIcon()}
                                    Estudios
                                </p>
                            </li>

                            <li class="group_lists-item">
                                <p class="group_lists-item-link">
                                    <span id="list-line"></span>
                                    ${ListIcon()}
                                    Otros
                                </p>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="list">
                        <div class="list_item">
                            <p class="group_lists-item-link list_item-link">
                                <span id="list-line"></span>
                                ${ListIcon()}
                                Otros
                            </p>
                        </div>
                    </div>

                </div>

                <div class="workbench_tasks-groups-actions">
                    <button class="workbench_tasks-groups-actions-button" id="newlist-button">${PlusIcon()} New list</button>
                    <button class="workbench_tasks-groups-actions-button" id="newgroup-button">${GroupIcon()}</button>
                </div>
            </div>
        </aside>
        
        <section class="workbench_tasks">
            <div class="workbench_tasks-container"></div>
        </section>

        <aside class="ads">
            <div>Advertising space available.</div>
        </aside>
    </article>
    `

    return view
}

export default Workbench
