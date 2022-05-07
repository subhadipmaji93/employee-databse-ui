
const Header = ({text})=>{
        return (
            <header className="header">
                <h1>{text}</h1>
            </header>
        )
    
};

export default Header;

// Props
// {onAdd, showForm}

// color
// {showForm ? 'red' : 'green'}
// text
// {showForm ? 'Close' : 'Add'}

// app.js
// onAdd={()=>setShowForm(!showForm)} showForm={showForm}
// {{location.pathname === "/" && (<NavigateToFormButton color={'green'} path={'/employee/add'} text={'Add'}></NavigateToFormButton>)}}