import { Link } from 'react-router-dom';
import logo from 'assets/thumbnail.png';

const styleClasses = {
  searchEventCard: `
    bg-white
    block
    border
    border-slate-300
    border-solid
    mh-120
    rounded
  `,
  searchEventThumbnail: `
    w-full
    rounded-t
  `,
  searchEventCardDetail: `
    grid
    grid-cols-2
  `
}

function SearchEventCard({ eventData }) {
  return (
    <Link to={`/events/${eventData.id}/details`} className={styleClasses.searchEventCard}>
      <img src={logo} className={styleClasses.searchEventThumbnail} alt="logo" />

      <div className="p-8">
        <div className={styleClasses.searchEventCardDetail}>
          <time className="text-neutral-500" dateTime="2018-07-07">July 7, 2022</time>
          <p className="text-right text-neutral-500 pr-2">Free</p>
        </div>

        <div>
          <p className="mt-6 font-bold text-xl">{ eventData.eventName }</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchEventCard;
