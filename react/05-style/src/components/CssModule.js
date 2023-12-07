// css 모듈화를 이용한 방식
import styles from '../styles/origin.module.css';

function CssModule() {
  return (
    <>
      <h2>CssModule.js</h2>
      {/* styles.origin: CSS 모듈에서 정의한 origin 클래스를 의미*/}
      <div className={styles.origin}>
        {/* css를 가져오는 방법 1) 백틱 */}
        {/* style의 box 클래스와 style의 red 클래스를 가져오겠다는 뜻 */}
        <div className={`${styles.box} ${styles.red}`}></div>
        {/* css를 가져오는 방법 2) 배열 - join(' ') 메서드로 띄어쓰기 하면서 연결 */}
        <div className={[styles.box, styles.orange].join(' ')}></div>
        <div className={[styles.box, styles.yellow].join(' ')}></div>
        <div className={[styles.box, styles.green].join(' ')}></div>
        <div className={[styles.box, styles.blue].join(' ')}></div>
        <div className={[styles.box, styles.purple].join(' ')}></div>
      </div>
    </>
  );
}

export default CssModule;
