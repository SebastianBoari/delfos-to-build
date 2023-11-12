

const Workbench = () => {
    const view = `
  <section id="workflow" class="animate__animated animate__fadeIn animate__slow workflow__theme--light">

  <div class="container-workflow">
      <!-- NAV -->
      <nav class="workstation__nav">
          <div class="workstation__nav--left">

              <label class="workstationNav__btn" id="viewALlTasksBtn"><img src="./assets/icons/task-icon.svg"
                  alt=""></label>
              <label class="workstationNav__btn" id="viewWeatherBtn"><img
                  src="./assets/icons/weather-icon.svg" alt=""></label>
              <label class="workstationNav__btn" id="viewCalendarBtn"><img
                  src="./assets/icons/calendar-icon.svg" alt=""></label>
              <label class="workstationNav__btn" id="viewOnlyImportantsBtn"><img
                  src="./assets/icons/important-icon.svg" alt=""></label>

          </div>
          <div class="workstation__nav--right">
              <img src="./assets/icons/info-icon.svg" alt=""
                  title="Desde izquierda a derecha: El primer icono es para ver todas las tareas creadas. El segundo icono es para ir al pronostico del tiempo, el tercer icono es para ir al calendario y el ultimo icono (el verde, que esta al lado mio) es para crear una nueva tarea. // From left to right: The first icon is for viewing all created tasks. The second icon is for accessing the weather forecast, the third icon is for accessing the calendar, and the last icon (the green one, which is next to me) is for creating a new task.">
                  <button id="addNewTaskBtn"><img src="./assets/icons/addnew-icon.svg" alt=""></button>
          </div>
      </nav>


      <section class="workstation__body">
          <article id="calendar" class="display-none">
              <iframe
                  src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23039BE5&ctz=America%2FArgentina%2FBuenos_Aires&src=ZXMuYXIub2ZmaWNpYWwjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%230B8043"
                  style="border-width:0" width="920" height="500" frameborder="0" scrolling="no"></iframe>
          </article>
          <article id="weather" class="display-none">
              <a class="weatherwidget-io" href="https://forecast7.com/es/n34d60n58d38/buenos-aires/"
                  data-label_1="BUENOS AIRES" data-label_2="WEATHER" data-font="Roboto"
                  data-icons="Climacons Animated" data-theme="gray" data-highcolor="#ff2f2f"
                  data-suncolor="#f7d72e" data-cloudfill="#ffffff">BUENOS AIRES WEATHER</a>
          </article>
          <!-- TASKS -->
          <section id="tasks">

          </section>
          <!-- CREATE TASK -->
          <form id="createNewTask" class="display-none">
              <div class="newTask__header">
                  <label class="newTask__label">
                      <img id="isImportantImg" src="./assets/icons/important-icon-default.svg" alt="">
                          <input type="checkbox" name="important" id="newTaskImportant">
                          </label>
                          <button id="cancelNewTask"><img src="./assets/icons/cancel-icon.svg" alt=""></button>
                      </div>
                      <div class="newTask__body">
                          <div class="newTask__label">
                              <label for="newTaskTitle">
                                  <h4>Title</h4>
                              </label>
                              <input type="text" name="title" id="newTaskTitle" required>
                          </div>
                          <div class="newTask__label">
                              <label for="newTaskDescrip">
                                  <p>Description</p>
                              </label>
                              <textarea name="description" id="newTaskDescrip"></textarea>
                          </div>
                          <input type="submit" value="Create Task" id="newTaskSubmit">
                      </div>
                  </form>

                  <!-- EDIT TASK -->
                  <form id="editTask" class="display-none">
                      <div class="editTask__header">
                          <label class="editTask__label" for="editTaskImportant">
                              <img id="isImportantImgEdit" src="./assets/icons/important-icon-default.svg" alt="">
                                  <input type="checkbox" name="important" id="editTaskImportant">
                                  </label>
                                  <button id="cancelEditTask"><img src="./assets/icons/cancel-icon.svg" alt=""></button>
                              </div>
                              <div class="editTask__body">
                                  <div class="editTask__label">
                                      <label for="editTaskTitle">
                                          <h4>Title</h4>
                                      </label>
                                      <input type="text" name="title" id="editTaskTitle">
                                  </div>
                                  <div class="editTask__label">
                                      <label for="editTaskDescrip">
                                          <p>Description</p>
                                      </label>
                                      <textarea name="description" id="editTaskDescrip"></textarea>
                                  </div>
                                  <input type="submit" value="Send changes" id="editTaskSubmit">
                              </div>
                          </form>

                          <!-- CALENDAR -->


                          <!-- WEATHER -->


                      </section>
              </div>
      </section>
      `
    return view
}

export default Workbench
