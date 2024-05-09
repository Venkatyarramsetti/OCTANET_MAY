< script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous">
src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"</script>

        $(document).ready(function () {
        let inpNewTask = $("#inpNewTask");
        let btnAdd = $("#btnAdd");
        let btnSort = $("#btnSort");
        let ulTasks = $("#ulTasks");

        function addItem() {
            let listItem = $('<li>', {'class': 'list-group-item'}).text(inpNewTask.val());

            let toggleButton = $('<button>', {'class': 'btn btn-sm btn-outline-success float-right ml-2'})
                .html('<i class="fas fa-check"></i>');

            toggleButton.click(() => {
                listItem.toggleClass('done');
            });

            let deleteButton = $('<button>', {'class': 'btn btn-sm btn-outline-danger float-right'})
                .html('<i class="fas fa-trash"></i>');

            deleteButton.click(() => {
                listItem.remove();
                toggleInputButtons();
            });

            listItem.append(toggleButton);
            listItem.append(deleteButton);

            ulTasks.append(listItem);

            inpNewTask.val('');

            toggleInputButtons();

            
            deleteButton.click(() => {
                listItem.remove();
                toggleInputButtons();
            });
        }

        function toggleInputButtons() {
            btnAdd.prop('disabled', inpNewTask.val() === '');
            btnSort.prop('disabled', ulTasks.children().length < 1);
        }

        inpNewTask.keypress((key) => {
            if (key.which === 13) addItem();
        });

        inpNewTask.on('input', toggleInputButtons);

        btnAdd.click(() => addItem());

        btnSort.click(() => sortTask());

        function sortTask() {
            let listItems = $('#ulTasks > li').get();
            let firstDoneItem = null;

            listItems.forEach((item) => {
                if ($(item).hasClass('done')) {
                    firstDoneItem = item;
                    return false;
                }
            });

            if (firstDoneItem) {
                $(firstDoneItem).remove();
                ulTasks.append(firstDoneItem);
            }
        }
    });
