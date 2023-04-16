function changeTable()
{
    table1 = document.querySelector('#table1')
    table2 = document.querySelector('#table2')
    button1 = document.querySelector('#button1')
    button2 = document.querySelector('#button2')
    if (event.target.id == 'button1')
    {
        table1.style = 'display:table'
        table2.style = 'display:none'
        button1.setAttribute('onclick', '')
        button2.setAttribute('onclick', 'changeTable()')
        button1.className = 'active'
        button2.className = ''
    }
    if (event.target.id == 'button2')
    {
        table2.style = 'display:table'
        table1.style = 'display:none'
        button2.setAttribute('onclick', '')
        button1.setAttribute('onclick', 'changeTable()')
        button2.className = 'active'
        button1.className = ''
    }
}