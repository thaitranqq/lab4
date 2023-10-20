import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import avatar from '../../../asset/image/thoxanh.jpg';
import facebook from '../../../asset/image/facebook-logo.svg';
import git from '../../../asset/image/github-logo.svg';
import insta from '../../../asset/image/instagram-logo.svg';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('info')}>
            <img src={avatar} className={cx('avatar')}></img>
            <p className={cx('name')}>Trần Vũ Quang Thái</p>
            <div className={cx('logo')}>
                <a href="#">
                    <img src={facebook}></img>
                </a>
                <a href="https://github.com/thaitranqq">
                    <img src={git}></img>
                </a>
                <img src={insta}></img>
            </div>
        </div>
    );
}

export default Contact;
