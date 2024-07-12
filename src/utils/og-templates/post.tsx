import type { CollectionEntry } from "astro:content";

export default (post: CollectionEntry<"blog">) => {
  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        fontSize: "90px",
        color: "black",
        padding: "3rem 3rem",
        gap: "3rem",
      }}
    >
      {post.data.title}

      <div
        style={{
          fontSize: "50px",
        }}
      >
        by Andrew JD Hudson
      </div>
    </div>
  );
};
