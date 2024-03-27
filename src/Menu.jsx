import React from 'react'
import './Menu.css';


const starters = [
    { title: 'QUINOA CROQUETTAS', description: 'Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)', price: '£4.95' },
    { title: 'QUINOA CROQUETTAS', description: 'Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)', price: '£4.95' },
    { title: 'QUINOA CROQUETTAS', description: 'Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)', price: '£4.95' },

  ];

  const mainCourses = [
    { title: 'EL CLASICO', description: 'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)', price: '£8.95' },
    { title: 'EL CLASICO', description: 'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)', price: '£8.95' },
    { title: 'EL CLASICO', description: 'Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)', price: '£8.95' },
  ];

  const MenuSection = ({ title, items }) => {
    return (
      <div className="menu-section">
        <h3 className="menu-section-title">{title}</h3>
        {items.map((item, index) => (
          <MenuItem key={index} title={item.title} description={item.description} price={item.price} />
        ))}
      </div>
    );
  };
  const MenuItem = ({ title, description, price }) => {
    return (
      <div className="menu-item">
        <h5 className="menu-item-title">{title}</h5>
        <p className="menu-item-description">{description}</p>
        <p className="menu-item-price">{price}</p>
      </div>
    );
  };
    
  const MenuHeader = ({ title }) => {
    return (
      <div className="menu-header">
        <h2 className="menu-header-title">{title}</h2>
        <button className="menu-header-button">KNOW MORE</button>
      </div>
    );
  };
const Menu=()=> {
    return (<div className="container">
        {/* <MenuHeader title="OUR MENU"></MenuHeader> */}
        <MenuSection title="STARTERS" items={starters} />
        <MenuSection title="MAIN COURSES" items={mainCourses} />
        <MenuSection title="MAIN COURSES" items={mainCourses} />
        <MenuSection title="MAIN COURSES" items={mainCourses} />
        {/* ... other menu sections */}
    </div>
    )
}
export default Menu;
