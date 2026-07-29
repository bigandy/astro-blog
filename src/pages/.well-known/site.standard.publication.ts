import { ATPROTO_DID, ATPROTO_PUBLICATION_RKEY } from "astro:env/server";
import type { APIRoute } from "astro";
import { generatePublicationWellKnown } from "@kckempf/astro-standard-site";

export const GET: APIRoute = () => {
	return new Response(
		generatePublicationWellKnown({
			did: ATPROTO_DID, // Your DID
			publicationRkey: ATPROTO_PUBLICATION_RKEY, // From create-publication output
		}),
		{ headers: { "Content-Type": "text/plain" } },
	);
};
