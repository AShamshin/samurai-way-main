import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqSUWGefeLef35q2txrO4W5gaQgjIrJoVvw&usqp=CAU'
          alt=''
        />
      </header>
      <nav className='nav'>
        <div>
          <a href=''> Profile</a>
        </div>
        <div>
          <a href=''>Messages</a>
        </div>
        <div>
          <a href=''>News</a>
        </div>
        <div>
          <a href=''>Music</a>
        </div>
        <div>
          <a href=''>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img
            src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
            alt=''
          />
        </div>
        <div>ava + description</div>
        <div>
          My posts
          <div>New post</div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
