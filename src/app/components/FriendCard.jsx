import Link from "next/link";

export default function FriendCard({ friend }) {

  const statusColor = {
    overdue: "badge-error",
    "almost due": "badge-warning",
    "on-track": "badge-success",
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition text-center p-6">

        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src={friend.picture}
            className="w-16 h-16 rounded-full object-cover"
            alt={friend.name}
          />
        </div>

        {/* Name */}
        <h2 className="mt-3 font-semibold text-base-content">{friend.name}</h2>

        {/* Days */}
        <p className="text-sm text-gray-500">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          {friend.tags.map((tag) => (
            <span key={tag} className="badge badge-outline">
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div className="mt-3">
          <span className={`badge ${statusColor[friend.status] || "badge-neutral"}`}>
            {friend.status}
          </span>
        </div>

      </div>
    </Link>
  );
}