$(function(){
    let name=$("#inp_name")
    let age=$("#inp_age")
    let city=$("#inp_city")
    let table=$("#inp_tab")
    let btn=$("#inp_btn")

    function refreshTable(persons){
        table.empty()
        table.append(`<thead>
        <th>name</th>
        <th>age</th>
        <th>city</th>
    </thead>`)
    for(person of persons){
        table.append(`<tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
    </tr>`)
    }
    }
    $.get('/api',function(data){
        refreshTable(data)
    })
    btn.click(function(){
        $.post('/api/add',{name:name.val(),age:age.val(),city:city.val()},function(data){
            refreshTable(data)
        })
    })

})