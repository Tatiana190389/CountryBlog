import Button from '../Button/Button';
import Feedback from '../Feedback/Feedback';
import Pagination from '../Pagination/Pagination';
import './FeedbackGroup.css';
import { feedbacksData } from './data';

export default function FeedbackGroup() {
  return (
    <section className="feedbacks">
      <h4 className="feedbacks__title">Отзывы о Барселоне</h4>
      <div className="feedbacks__group">
        {feedbacksData.map((user) => (
          <Feedback key={user.id} name={user.name} avatar={user.avatar} text={user.text} photoGallery={user.gallery} />
        ))}
      </div>
      <div className="feedbacks__footer">
        <Button />
        <Pagination />
      </div>
    </section>
  );
}
