import Notification from "../components/notification"
export default function notification() {
      return (
            <div>
                  {[0, 1, 2, 3, 4, 5, 6, 6].map(() => (<Notification />))}
            </div>
      );
}