import styles from './About.module.scss';
import classNames from 'classnames/bind';
import image from '../../../asset/image/body.jpg';

const cx = classNames.bind(styles);
function About() {
    return (
        <div>
            <p className={cx('para')}>
                Web phim Trung Quốc, thường được gọi là "streaming platform" hay "nền tảng phát sóng trực tuyến," đóng
                vai trò quan trọng trong việc cung cấp nội dung giải trí cho người dùng cả trong nước và quốc tế. Các
                nền tảng như iQiyi, Tencent Video, Youku, và Mango TV đã trở thành một phần không thể thiếu của cuộc
                sống hàng ngày của người dân Trung Quốc. Chúng cung cấp một loạt lớn các nội dung giải trí, bao gồm phim
                truyền hình, phim chiếu rạp, chương trình thực tế, và nhiều thể loại khác. Những nền tảng này không chỉ
                là nơi để xem các bộ phim và chương trình truyền hình, mà còn đóng vai trò quan trọng trong việc sản
                xuất và phân phối nội dung giải trí. Với sự đầu tư cao và chất lượng sản xuất đáng kể, các phim và
                chương trình từ web phim Trung Quốc thường thu hút sự quan tâm của khán giả, cả trong và ngoài Trung
                Quốc. Đặc biệt, web phim Trung Quốc đã trở thành một yếu tố quan trọng trong việc quảng bá văn hóa và
                giới thiệu ngôn ngữ Trung Quốc trên toàn thế giới. Một số bộ phim và chương trình truyền hình Trung Quốc
                đã có sự ảnh hưởng toàn cầu và thu hút đông đảo người xem quốc tế.
            </p>
            <img src={image} className={cx('img')}></img>
        </div>
    );
}

export default About;
