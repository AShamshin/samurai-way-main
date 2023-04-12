import preloader from '../../../assets/images/Dual.svg';

let Preloader = (props: any) => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <img src={preloader} alt='' />
    </div>
  );
};
export default Preloader;
