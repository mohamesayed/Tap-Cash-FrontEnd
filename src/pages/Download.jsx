
import '../style/Download.css';
import qr from '../imgs/qr.png'

const Download = ()=>{
  return (
    <div className="scan">
      <div className="image">
      <img src={qr} alt={qr}  />
      </div>
      <p>Scan To Download The App</p>
    </div>
  );
};

export default Download;