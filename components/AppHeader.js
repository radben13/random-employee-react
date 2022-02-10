import Link from 'next/link'

const AppHeader = () => {
    return (
        <header>
        <Link href="/"><a className="logo" href="#"><img src="/funme_icon.png" alt="Braden's Random Employee App" /><div>Employee List</div></a></Link>
        
        <nav>
          <ul className=""></ul>
        </nav>
      </header>
    )
}

export default AppHeader
