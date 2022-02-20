const loggedUsersTable = document.querySelector( '.logged-users-table-body' )

const getUsersInterval = window.setInterval( async () => {
    
    await getLoggedUsers()

}, 3000 );

const getLoggedUsers = async () => {

    await fetch( 'http://localhost:8000/server/get_logged_users.php', {
        method: 'GET'
    })
    .then( ( res ) => res.json())
    .then( data => {
        appendLoggedUsers( data )
    })
    .catch( ( ) => {
        
        //Handles wrong session passed
        alert( 'Error: You are not logged in' )
        return

    })
}

const appendLoggedUsers = ( users ) => {

    loggedUsersTable.innerHTML = ''

    users.forEach( user => {
        appendLoggedUser( user)
    });
}

const appendLoggedUser = ( user ) => {

    loggedUsersTable.innerHTML += `
        <tr>
            <td> ${ user[ 0 ] } </td>
            <td> ${ user[ 5 ] } </td>
            <td> ${ user[ 4 ] } </td>
            <td> ${ user[ 2 ] } </td>
        </tr>
    `
}