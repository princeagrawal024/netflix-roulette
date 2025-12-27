import 'styles/genericMessagePortal.css';
import { TiTick } from 'react-icons/ti';
import { MdSmsFailed } from 'react-icons/md';

type GenericMessagePortalProps = {
  heading: string;
  message: string;
  isSuccess: boolean;
  showGenericMessagePortalCallback: (heading: string, message: string, show: boolean, isSuccess: boolean) => void;
};
const GenericMessagePortal = ({
  heading,
  message,
  isSuccess,
  showGenericMessagePortalCallback,
}: GenericMessagePortalProps) => {
  return (
    <>
      <div className="sucess-failure-logo">{isSuccess ? <TiTick /> : <MdSmsFailed />}</div>
      <div className="generic-portal-title">
        <button
          type="button"
          className="generic-portal-close-button"
          onClick={() => showGenericMessagePortalCallback('', '', false, false)}
        >
          X
        </button>
        <h1 className="generic-portal-heading">{heading}</h1>
        <p>{message}</p>
      </div>
    </>
  );
};

export default GenericMessagePortal;
