declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (data: CollectionEntry<C>) => boolean
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"10-years.md": {
  id: "10-years.md",
  slug: "10-years",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"100-one-hundred.md": {
  id: "100-one-hundred.md",
  slug: "100-one-hundred",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"109.md": {
  id: "109.md",
  slug: "109",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"10k-in-the-sunshine.md": {
  id: "10k-in-the-sunshine.md",
  slug: "10k-in-the-sunshine",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"115.md": {
  id: "115.md",
  slug: "115",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"118.md": {
  id: "118.md",
  slug: "118",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"120.md": {
  id: "120.md",
  slug: "120",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"140-days-reading-half-marathon.md": {
  id: "140-days-reading-half-marathon.md",
  slug: "140-days-reading-half-marathon",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"154.md": {
  id: "154.md",
  slug: "154",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"174.md": {
  id: "174.md",
  slug: "174",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"176.md": {
  id: "176.md",
  slug: "176",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"1q84.md": {
  id: "1q84.md",
  slug: "1q84",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2010-review.md": {
  id: "2010-review.md",
  slug: "2010-review",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2019-summary.md": {
  id: "2019-summary.md",
  slug: "2019-summary",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2020-goals.md": {
  id: "2020-goals.md",
  slug: "2020-goals",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2020-review.md": {
  id: "2020-review.md",
  slug: "2020-review",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2021-goals.md": {
  id: "2021-goals.md",
  slug: "2021-goals",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"2022-goals.md": {
  id: "2022-goals.md",
  slug: "2022-goals",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"30-running-days-september.md": {
  id: "30-running-days-september.md",
  slug: "30-running-days-september",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"5ifth-day-of-being-ill.md": {
  id: "5ifth-day-of-being-ill.md",
  slug: "5ifth-day-of-being-ill",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"_dummy-content.md": {
  id: "_dummy-content.md",
  slug: "_dummy-content",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"a-break.md": {
  id: "a-break.md",
  slug: "a-break",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"a-new-dawn-a-new-speedo.md": {
  id: "a-new-dawn-a-new-speedo.md",
  slug: "a-new-dawn-a-new-speedo",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"all-the-stars-the-shifting-sands.md": {
  id: "all-the-stars-the-shifting-sands.md",
  slug: "all-the-stars-the-shifting-sands",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"allo-darlin-tallulah.md": {
  id: "allo-darlin-tallulah.md",
  slug: "allo-darlin-tallulah",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"almost-the-weekend.md": {
  id: "almost-the-weekend.md",
  slug: "almost-the-weekend",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"along-canal-bridge.md": {
  id: "along-canal-bridge.md",
  slug: "along-canal-bridge",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"an-it-tech.md": {
  id: "an-it-tech.md",
  slug: "an-it-tech",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"angular-with-wp-api.md": {
  id: "angular-with-wp-api.md",
  slug: "angular-with-wp-api",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"arthur-is-6-months-old.md": {
  id: "arthur-is-6-months-old.md",
  slug: "arthur-is-6-months-old",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"arthur-is-now-80-days-old.md": {
  id: "arthur-is-now-80-days-old.md",
  slug: "arthur-is-now-80-days-old",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"audio.md": {
  id: "audio.md",
  slug: "audio",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"automate-opening-application-macos.md": {
  id: "automate-opening-application-macos.md",
  slug: "automate-opening-application-macos",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"automation-solution.md": {
  id: "automation-solution.md",
  slug: "automation-solution",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"back-from-frankfurt.md": {
  id: "back-from-frankfurt.md",
  slug: "back-from-frankfurt",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"back-from-italy.md": {
  id: "back-from-italy.md",
  slug: "back-from-italy",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"back-front.md": {
  id: "back-front.md",
  slug: "back-front",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"back-on-the-bike.md": {
  id: "back-on-the-bike.md",
  slug: "back-on-the-bike",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"back-to-running.md": {
  id: "back-to-running.md",
  slug: "back-to-running",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"back.md": {
  id: "back.md",
  slug: "back",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bad-mood-monday.md": {
  id: "bad-mood-monday.md",
  slug: "bad-mood-monday",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bank-monday-robbery.md": {
  id: "bank-monday-robbery.md",
  slug: "bank-monday-robbery",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"benny.md": {
  id: "benny.md",
  slug: "benny",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"beta-guardian-co-uk.md": {
  id: "beta-guardian-co-uk.md",
  slug: "beta-guardian-co-uk",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"between-jobs.md": {
  id: "between-jobs.md",
  slug: "between-jobs",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"big-css.md": {
  id: "big-css.md",
  slug: "big-css",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"big-news-1.md": {
  id: "big-news-1.md",
  slug: "big-news-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"big-news-2-new-job.md": {
  id: "big-news-2-new-job.md",
  slug: "big-news-2-new-job",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"birthday-32.md": {
  id: "birthday-32.md",
  slug: "birthday-32",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"black-swan.md": {
  id: "black-swan.md",
  slug: "black-swan",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"blogging-via-google-docs.md": {
  id: "blogging-via-google-docs.md",
  slug: "blogging-via-google-docs",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"blogging-via-ipad2.md": {
  id: "blogging-via-ipad2.md",
  slug: "blogging-via-ipad2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bloody-marvelous-2.md": {
  id: "bloody-marvelous-2.md",
  slug: "bloody-marvelous-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"blue-sky-fly.md": {
  id: "blue-sky-fly.md",
  slug: "blue-sky-fly",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bracknell-half-marathon.md": {
  id: "bracknell-half-marathon.md",
  slug: "bracknell-half-marathon",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"breaking-borders-3.md": {
  id: "breaking-borders-3.md",
  slug: "breaking-borders-3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"bright-in-the-middle-wick-sunshine.md": {
  id: "bright-in-the-middle-wick-sunshine.md",
  slug: "bright-in-the-middle-wick-sunshine",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"brrrrrr-winters-on-its-way.md": {
  id: "brrrrrr-winters-on-its-way.md",
  slug: "brrrrrr-winters-on-its-way",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"cats.md": {
  id: "cats.md",
  slug: "cats",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"cavendish-wins-rain-rain-rain-rain-rain.md": {
  id: "cavendish-wins-rain-rain-rain-rain-rain.md",
  slug: "cavendish-wins-rain-rain-rain-rain-rain",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"celeb-apprentice.md": {
  id: "celeb-apprentice.md",
  slug: "celeb-apprentice",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"champions-league-draw.md": {
  id: "champions-league-draw.md",
  slug: "champions-league-draw",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"changing-web-hosts.md": {
  id: "changing-web-hosts.md",
  slug: "changing-web-hosts",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"chili.md": {
  id: "chili.md",
  slug: "chili",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"chris-coyier-big-web-show.md": {
  id: "chris-coyier-big-web-show.md",
  slug: "chris-coyier-big-web-show",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ciw-site-designer.md": {
  id: "ciw-site-designer.md",
  slug: "ciw-site-designer",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"clouds-and-aeroplanes.md": {
  id: "clouds-and-aeroplanes.md",
  slug: "clouds-and-aeroplanes",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"codepen-all-the-things.md": {
  id: "codepen-all-the-things.md",
  slug: "codepen-all-the-things",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"coffee-and-photos.md": {
  id: "coffee-and-photos.md",
  slug: "coffee-and-photos",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"coffee-break.md": {
  id: "coffee-break.md",
  slug: "coffee-break",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"cold-feet.md": {
  id: "cold-feet.md",
  slug: "cold-feet",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"cold-running.md": {
  id: "cold-running.md",
  slug: "cold-running",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"container-queries/index.md": {
  id: "container-queries/index.md",
  slug: "container-queries",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"cool-surf-photography-video.md": {
  id: "cool-surf-photography-video.md",
  slug: "cool-surf-photography-video",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"croix-de-fer.md": {
  id: "croix-de-fer.md",
  slug: "croix-de-fer",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"css3.md": {
  id: "css3.md",
  slug: "css3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"deerhoof.md": {
  id: "deerhoof.md",
  slug: "deerhoof",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"dis2008top50.md": {
  id: "dis2008top50.md",
  slug: "dis2008top50",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"distracted-lets-make-technology-helps-us-spend-time-well.md": {
  id: "distracted-lets-make-technology-helps-us-spend-time-well.md",
  slug: "distracted-lets-make-technology-helps-us-spend-time-well",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"dont-hack-the-core.md": {
  id: "dont-hack-the-core.md",
  slug: "dont-hack-the-core",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"dorset-wind-blast.md": {
  id: "dorset-wind-blast.md",
  slug: "dorset-wind-blast",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"down-up.md": {
  id: "down-up.md",
  slug: "down-up",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"electric-studio-first-month.md": {
  id: "electric-studio-first-month.md",
  slug: "electric-studio-first-month",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"england-on-fire.md": {
  id: "england-on-fire.md",
  slug: "england-on-fire",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"entered-reading-half.md": {
  id: "entered-reading-half.md",
  slug: "entered-reading-half",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"exercise-notes-1.md": {
  id: "exercise-notes-1.md",
  slug: "exercise-notes-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"exploding-dried-tulips.md": {
  id: "exploding-dried-tulips.md",
  slug: "exploding-dried-tulips",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ff-conf-2016.md": {
  id: "ff-conf-2016.md",
  slug: "ff-conf-2016",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"final-day-chemist.md": {
  id: "final-day-chemist.md",
  slug: "final-day-chemist",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"first-ever-parkrun.md": {
  id: "first-ever-parkrun.md",
  slug: "first-ever-parkrun",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"first-training-runs-with-forerunner-405.md": {
  id: "first-training-runs-with-forerunner-405.md",
  slug: "first-training-runs-with-forerunner-405",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"foals-and-coco.md": {
  id: "foals-and-coco.md",
  slug: "foals-and-coco",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"football-running.md": {
  id: "football-running.md",
  slug: "football-running",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"football.md": {
  id: "football.md",
  slug: "football",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"four-times-off.md": {
  id: "four-times-off.md",
  slug: "four-times-off",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"fourtet-remix-of-radiohead.md": {
  id: "fourtet-remix-of-radiohead.md",
  slug: "fourtet-remix-of-radiohead",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"friday-morning.md": {
  id: "friday-morning.md",
  slug: "friday-morning",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"friday-river.md": {
  id: "friday-river.md",
  slug: "friday-river",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"friday-summary.md": {
  id: "friday-summary.md",
  slug: "friday-summary",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"friday-the-thirteenth.md": {
  id: "friday-the-thirteenth.md",
  slug: "friday-the-thirteenth",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"from-scribefire-with-love-2.md": {
  id: "from-scribefire-with-love-2.md",
  slug: "from-scribefire-with-love-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"fuji-snow-suck.md": {
  id: "fuji-snow-suck.md",
  slug: "fuji-snow-suck",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"future-post.md": {
  id: "future-post.md",
  slug: "future-post",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"gah-just-get-the-words-down-then.md": {
  id: "gah-just-get-the-words-down-then.md",
  slug: "gah-just-get-the-words-down-then",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"gathering-festival-this-weekend.md": {
  id: "gathering-festival-this-weekend.md",
  slug: "gathering-festival-this-weekend",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"george-ezra-its-just-my-skin.md": {
  id: "george-ezra-its-just-my-skin.md",
  slug: "george-ezra-its-just-my-skin",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"get-iplayer-download-gilles-peterson/get-iplayer-download-gilles-peterson.md": {
  id: "get-iplayer-download-gilles-peterson/get-iplayer-download-gilles-peterson.md",
  slug: "get-iplayer-download-gilles-peterson/get-iplayer-download-gilles-peterson",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"gin-and-juice.md": {
  id: "gin-and-juice.md",
  slug: "gin-and-juice",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"goals-2014.md": {
  id: "goals-2014.md",
  slug: "goals-2014",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"going-on-holiday-to-france.md": {
  id: "going-on-holiday-to-france.md",
  slug: "going-on-holiday-to-france",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"going-to-madrid.md": {
  id: "going-to-madrid.md",
  slug: "going-to-madrid",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"good-morning-world.md": {
  id: "good-morning-world.md",
  slug: "good-morning-world",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"goodbye-facebook.md": {
  id: "goodbye-facebook.md",
  slug: "goodbye-facebook",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"grid-layout.md": {
  id: "grid-layout.md",
  slug: "grid-layout",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"guardian-muso-blog.md": {
  id: "guardian-muso-blog.md",
  slug: "guardian-muso-blog",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"happy-2016.md": {
  id: "happy-2016.md",
  slug: "happy-2016",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"happy-bday-christine.md": {
  id: "happy-bday-christine.md",
  slug: "happy-bday-christine",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"happy-new-year-2013.md": {
  id: "happy-new-year-2013.md",
  slug: "happy-new-year-2013",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"happy-new-year.md": {
  id: "happy-new-year.md",
  slug: "happy-new-year",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"happy-st-andrews-day.md": {
  id: "happy-st-andrews-day.md",
  slug: "happy-st-andrews-day",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"happynewyear.md": {
  id: "happynewyear.md",
  slug: "happynewyear",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"having-a-great-and-relaxing-weekend.md": {
  id: "having-a-great-and-relaxing-weekend.md",
  slug: "having-a-great-and-relaxing-weekend",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"heart-podcasts.md": {
  id: "heart-podcasts.md",
  slug: "heart-podcasts",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"hello-world.md": {
  id: "hello-world.md",
  slug: "hello-world",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"herman-dune.md": {
  id: "herman-dune.md",
  slug: "herman-dune",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"hey-ho-let.md": {
  id: "hey-ho-let.md",
  slug: "hey-ho-let",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"honey-moon.md": {
  id: "honey-moon.md",
  slug: "honey-moon",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"hoorah-science-exploration.md": {
  id: "hoorah-science-exploration.md",
  slug: "hoorah-science-exploration",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"how-to-trigger-a-webhook-with-wordpress.md": {
  id: "how-to-trigger-a-webhook-with-wordpress.md",
  slug: "how-to-trigger-a-webhook-with-wordpress",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"https.md": {
  id: "https.md",
  slug: "https",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"huzzah-cest-presque-le-weekend.md": {
  id: "huzzah-cest-presque-le-weekend.md",
  slug: "huzzah-cest-presque-le-weekend",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"hw-running-club.md": {
  id: "hw-running-club.md",
  slug: "hw-running-club",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"i-made-that-too.md": {
  id: "i-made-that-too.md",
  slug: "i-made-that-too",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"i-made-that.md": {
  id: "i-made-that.md",
  slug: "i-made-that",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"i-passed.md": {
  id: "i-passed.md",
  slug: "i-passed",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ideas.md": {
  id: "ideas.md",
  slug: "ideas",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ie9-is-here.md": {
  id: "ie9-is-here.md",
  slug: "ie9-is-here",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ill-ill-ill.md": {
  id: "ill-ill-ill.md",
  slug: "ill-ill-ill",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"im-back.md": {
  id: "im-back.md",
  slug: "im-back",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"implementing-web-mentions-website.md": {
  id: "implementing-web-mentions-website.md",
  slug: "implementing-web-mentions-website",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"installing-raspberry-pi-notes.md": {
  id: "installing-raspberry-pi-notes.md",
  slug: "installing-raspberry-pi-notes",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"inti-and-punku.md": {
  id: "inti-and-punku.md",
  slug: "inti-and-punku",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ipad2-prices.md": {
  id: "ipad2-prices.md",
  slug: "ipad2-prices",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ipad2.md": {
  id: "ipad2.md",
  slug: "ipad2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"its-cold-in-the-eve-run.md": {
  id: "its-cold-in-the-eve-run.md",
  slug: "its-cold-in-the-eve-run",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ive-entered-henley-half-marathon.md": {
  id: "ive-entered-henley-half-marathon.md",
  slug: "ive-entered-henley-half-marathon",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"jason-santa-maria-saying-no.md": {
  id: "jason-santa-maria-saying-no.md",
  slug: "jason-santa-maria-saying-no",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"javascript-the-good-parts.md": {
  id: "javascript-the-good-parts.md",
  slug: "javascript-the-good-parts",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"jessica-hische-lettering-for-a-living.md": {
  id: "jessica-hische-lettering-for-a-living.md",
  slug: "jessica-hische-lettering-for-a-living",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"joe-banfi-guts-and-bones.md": {
  id: "joe-banfi-guts-and-bones.md",
  slug: "joe-banfi-guts-and-bones",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"jose-gonzalez-every-age.md": {
  id: "jose-gonzalez-every-age.md",
  slug: "jose-gonzalez-every-age",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"june-to-july.md": {
  id: "june-to-july.md",
  slug: "june-to-july",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"juxtaposition-of-time.md": {
  id: "juxtaposition-of-time.md",
  slug: "juxtaposition-of-time",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"k2.md": {
  id: "k2.md",
  slug: "k2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"kid-cudi.md": {
  id: "kid-cudi.md",
  slug: "kid-cudi",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"killer-run.md": {
  id: "killer-run.md",
  slug: "killer-run",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"kittens.md": {
  id: "kittens.md",
  slug: "kittens",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"klaxons-1.md": {
  id: "klaxons-1.md",
  slug: "klaxons-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"klaxons-scoop-the-mercury-prize.md": {
  id: "klaxons-scoop-the-mercury-prize.md",
  slug: "klaxons-scoop-the-mercury-prize",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"last-week.md": {
  id: "last-week.md",
  slug: "last-week",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"last-weekend-was-creating-custom-posts.md": {
  id: "last-weekend-was-creating-custom-posts.md",
  slug: "last-weekend-was-creating-custom-posts",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"le-weekend-dete.md": {
  id: "le-weekend-dete.md",
  slug: "le-weekend-dete",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"lent-begins.md": {
  id: "lent-begins.md",
  slug: "lent-begins",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"lessons-learnt-breaking-servers.md": {
  id: "lessons-learnt-breaking-servers.md",
  slug: "lessons-learnt-breaking-servers",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"let-the-training-begin-running.md": {
  id: "let-the-training-begin-running.md",
  slug: "let-the-training-begin-running",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"longer-maple.md": {
  id: "longer-maple.md",
  slug: "longer-maple",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"look-out-10.md": {
  id: "look-out-10.md",
  slug: "look-out-10",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"looking-back-to-2018.md": {
  id: "looking-back-to-2018.md",
  slug: "looking-back-to-2018",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"looking-forward-post-from-iphone.md": {
  id: "looking-forward-post-from-iphone.md",
  slug: "looking-forward-post-from-iphone",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"making-road-bike-party-2.md": {
  id: "making-road-bike-party-2.md",
  slug: "making-road-bike-party-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"manu-chelsea-quarters.md": {
  id: "manu-chelsea-quarters.md",
  slug: "manu-chelsea-quarters",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"manu-top.md": {
  id: "manu-top.md",
  slug: "manu-top",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"massachre-of-the-smiling-toadstalls.md": {
  id: "massachre-of-the-smiling-toadstalls.md",
  slug: "massachre-of-the-smiling-toadstalls",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"maximal-sentence-length.md": {
  id: "maximal-sentence-length.md",
  slug: "maximal-sentence-length",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"me-widgets-aint-grooving-to-the-flux.md": {
  id: "me-widgets-aint-grooving-to-the-flux.md",
  slug: "me-widgets-aint-grooving-to-the-flux",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ment-to-be-takin-it-ez.md": {
  id: "ment-to-be-takin-it-ez.md",
  slug: "ment-to-be-takin-it-ez",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"mid-summer.md": {
  id: "mid-summer.md",
  slug: "mid-summer",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"mid-week-kaner.md": {
  id: "mid-week-kaner.md",
  slug: "mid-week-kaner",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"monday-and-knackered.md": {
  id: "monday-and-knackered.md",
  slug: "monday-and-knackered",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"monday-long-run.md": {
  id: "monday-long-run.md",
  slug: "monday-long-run",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"monday-morning.md": {
  id: "monday-morning.md",
  slug: "monday-morning",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"monday-quickie.md": {
  id: "monday-quickie.md",
  slug: "monday-quickie",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"morning-runner.md": {
  id: "morning-runner.md",
  slug: "morning-runner",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"moving-to-aws.md": {
  id: "moving-to-aws.md",
  slug: "moving-to-aws",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"mr-scruff-piccadilly-records.md": {
  id: "mr-scruff-piccadilly-records.md",
  slug: "mr-scruff-piccadilly-records",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"music-a-year-in-retrospective.md": {
  id: "music-a-year-in-retrospective.md",
  slug: "music-a-year-in-retrospective",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"music-notes-1.md": {
  id: "music-notes-1.md",
  slug: "music-notes-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"music-second-try.md": {
  id: "music-second-try.md",
  slug: "music-second-try",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"music.md": {
  id: "music.md",
  slug: "music",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"name-one-maxxi-soundsystem-one-three.md": {
  id: "name-one-maxxi-soundsystem-one-three.md",
  slug: "name-one-maxxi-soundsystem-one-three",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"new-arrival-arthur-hudson.md": {
  id: "new-arrival-arthur-hudson.md",
  slug: "new-arrival-arthur-hudson",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"new-arrival-emma-hudson.md": {
  id: "new-arrival-emma-hudson.md",
  slug: "new-arrival-emma-hudson",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"new-blur-song.md": {
  id: "new-blur-song.md",
  slug: "new-blur-song",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"new-camera-boz.md": {
  id: "new-camera-boz.md",
  slug: "new-camera-boz",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"new-job.md": {
  id: "new-job.md",
  slug: "new-job",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"new-pixies-song.md": {
  id: "new-pixies-song.md",
  slug: "new-pixies-song",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"new-server.md": {
  id: "new-server.md",
  slug: "new-server",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"newness.md": {
  id: "newness.md",
  slug: "newness",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"not-eht-best.md": {
  id: "not-eht-best.md",
  slug: "not-eht-best",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"not-running-from-iphone.md": {
  id: "not-running-from-iphone.md",
  slug: "not-running-from-iphone",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"not-slow-and-ez.md": {
  id: "not-slow-and-ez.md",
  slug: "not-slow-and-ez",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"o-course.md": {
  id: "o-course.md",
  slug: "o-course",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"obama-the-44th-president.md": {
  id: "obama-the-44th-president.md",
  slug: "obama-the-44th-president",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"olympics-a-year-away.md": {
  id: "olympics-a-year-away.md",
  slug: "olympics-a-year-away",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"one-thing-well.md": {
  id: "one-thing-well.md",
  slug: "one-thing-well",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"one-week-to-go.md": {
  id: "one-week-to-go.md",
  slug: "one-week-to-go",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"onwards-into-the-future.md": {
  id: "onwards-into-the-future.md",
  slug: "onwards-into-the-future",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"oscars.md": {
  id: "oscars.md",
  slug: "oscars",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"pancake-time.md": {
  id: "pancake-time.md",
  slug: "pancake-time",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"passed-exam.md": {
  id: "passed-exam.md",
  slug: "passed-exam",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"password-protection-testing-1.md": {
  id: "password-protection-testing-1.md",
  slug: "password-protection-testing-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"photography-at-tvu.md": {
  id: "photography-at-tvu.md",
  slug: "photography-at-tvu",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"photos.md": {
  id: "photos.md",
  slug: "photos",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"picture-featured-image-post.md": {
  id: "picture-featured-image-post.md",
  slug: "picture-featured-image-post",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"plugin-development-part-one-wordpress.md": {
  id: "plugin-development-part-one-wordpress.md",
  slug: "plugin-development-part-one-wordpress",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"plugin-error-fixed.md": {
  id: "plugin-error-fixed.md",
  slug: "plugin-error-fixed",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"plugin-error.md": {
  id: "plugin-error.md",
  slug: "plugin-error",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"post-illness-whitley-hw-run.md": {
  id: "post-illness-whitley-hw-run.md",
  slug: "post-illness-whitley-hw-run",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"post-london-2012-blues.md": {
  id: "post-london-2012-blues.md",
  slug: "post-london-2012-blues",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"putting-photos-online-with-wordpress.md": {
  id: "putting-photos-online-with-wordpress.md",
  slug: "putting-photos-online-with-wordpress",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"quit-yo-jibba-jabba-its-april-you-fool.md": {
  id: "quit-yo-jibba-jabba-its-april-you-fool.md",
  slug: "quit-yo-jibba-jabba-its-april-you-fool",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"radiohead-remixes-strea.md": {
  id: "radiohead-remixes-strea.md",
  slug: "radiohead-remixes-strea",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"raspberry-pi-spring.md": {
  id: "raspberry-pi-spring.md",
  slug: "raspberry-pi-spring",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"re-install-better-performance.md": {
  id: "re-install-better-performance.md",
  slug: "re-install-better-performance",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"re-track.md": {
  id: "re-track.md",
  slug: "re-track",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"re-turn-running.md": {
  id: "re-turn-running.md",
  slug: "re-turn-running",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"reading-half-marathon-failiure.md": {
  id: "reading-half-marathon-failiure.md",
  slug: "reading-half-marathon-failiure",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"reading-half-marathon.md": {
  id: "reading-half-marathon.md",
  slug: "reading-half-marathon",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"reading-to-par-by-bike.md": {
  id: "reading-to-par-by-bike.md",
  slug: "reading-to-par-by-bike",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"realtime-communication-with-socket-io-and-wordpress.md": {
  id: "realtime-communication-with-socket-io-and-wordpress.md",
  slug: "realtime-communication-with-socket-io-and-wordpress",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"red-junky-crackhead-from-venus.md": {
  id: "red-junky-crackhead-from-venus.md",
  slug: "red-junky-crackhead-from-venus",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"responsive-conference.md": {
  id: "responsive-conference.md",
  slug: "responsive-conference",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ridges-ambarrow.md": {
  id: "ridges-ambarrow.md",
  slug: "ridges-ambarrow",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ripe-red-tomatoes-and-the-whistle-stop-cafe.md": {
  id: "ripe-red-tomatoes-and-the-whistle-stop-cafe.md",
  slug: "ripe-red-tomatoes-and-the-whistle-stop-cafe",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"rippin-kitten-miss-kitten.md": {
  id: "rippin-kitten-miss-kitten.md",
  slug: "rippin-kitten-miss-kitten",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"river-and-back-21m19s-running.md": {
  id: "river-and-back-21m19s-running.md",
  slug: "river-and-back-21m19s-running",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"road-page-speed-perfection.md": {
  id: "road-page-speed-perfection.md",
  slug: "road-page-speed-perfection",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"rock-en-seine.md": {
  id: "rock-en-seine.md",
  slug: "rock-en-seine",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"roll-of-film-and-the-white-cup-of-tea.md": {
  id: "roll-of-film-and-the-white-cup-of-tea.md",
  slug: "roll-of-film-and-the-white-cup-of-tea",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"run-site.md": {
  id: "run-site.md",
  slug: "run-site",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-2.md": {
  id: "running-2.md",
  slug: "running-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-2013-week-1.md": {
  id: "running-2013-week-1.md",
  slug: "running-2013-week-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-2013-week-2.md": {
  id: "running-2013-week-2.md",
  slug: "running-2013-week-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-again-2.md": {
  id: "running-again-2.md",
  slug: "running-again-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-again.md": {
  id: "running-again.md",
  slug: "running-again",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-along-the-river.md": {
  id: "running-along-the-river.md",
  slug: "running-along-the-river",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-five-weeks.md": {
  id: "running-five-weeks.md",
  slug: "running-five-weeks",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-goals-2019.md": {
  id: "running-goals-2019.md",
  slug: "running-goals-2019",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-home-1.md": {
  id: "running-home-1.md",
  slug: "running-home-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-home-19m14s-2-69miles.md": {
  id: "running-home-19m14s-2-69miles.md",
  slug: "running-home-19m14s-2-69miles",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-home-3.md": {
  id: "running-home-3.md",
  slug: "running-home-3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-home-4.md": {
  id: "running-home-4.md",
  slug: "running-home-4",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-in-the-turkey-rain.md": {
  id: "running-in-the-turkey-rain.md",
  slug: "running-in-the-turkey-rain",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-in-the-wind.md": {
  id: "running-in-the-wind.md",
  slug: "running-in-the-wind",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-january.md": {
  id: "running-january.md",
  slug: "running-january",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-muddy-snob.md": {
  id: "running-muddy-snob.md",
  slug: "running-muddy-snob",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-prospect-park-with-cesar.md": {
  id: "running-prospect-park-with-cesar.md",
  slug: "running-prospect-park-with-cesar",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-short-river.md": {
  id: "running-short-river.md",
  slug: "running-short-river",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-space.md": {
  id: "running-space.md",
  slug: "running-space",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-to-work-2.md": {
  id: "running-to-work-2.md",
  slug: "running-to-work-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-to-work.md": {
  id: "running-to-work.md",
  slug: "running-to-work",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running-with-ale.md": {
  id: "running-with-ale.md",
  slug: "running-with-ale",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"running.md": {
  id: "running.md",
  slug: "running",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sackboy.md": {
  id: "sackboy.md",
  slug: "sackboy",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sass-3-2.md": {
  id: "sass-3-2.md",
  slug: "sass-3-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"seeing-you.md": {
  id: "seeing-you.md",
  slug: "seeing-you",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"shake-shake-shake.md": {
  id: "shake-shake-shake.md",
  slug: "shake-shake-shake",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"shit-am-knackered.md": {
  id: "shit-am-knackered.md",
  slug: "shit-am-knackered",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sixty-miles.md": {
  id: "sixty-miles.md",
  slug: "sixty-miles",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sleepy-sunshine.md": {
  id: "sleepy-sunshine.md",
  slug: "sleepy-sunshine",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"snow-its-a-coming.md": {
  id: "snow-its-a-coming.md",
  slug: "snow-its-a-coming",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"snowing-melting.md": {
  id: "snowing-melting.md",
  slug: "snowing-melting",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"southampton-summer-time.md": {
  id: "southampton-summer-time.md",
  slug: "southampton-summer-time",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"space-oddity-commander-chris-hadfield.md": {
  id: "space-oddity-commander-chris-hadfield.md",
  slug: "space-oddity-commander-chris-hadfield",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"speed.md": {
  id: "speed.md",
  slug: "speed",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"spring-back-forward.md": {
  id: "spring-back-forward.md",
  slug: "spring-back-forward",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"spring-is-now.md": {
  id: "spring-is-now.md",
  slug: "spring-is-now",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"spring-un-sprung.md": {
  id: "spring-un-sprung.md",
  slug: "spring-un-sprung",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"spring.md": {
  id: "spring.md",
  slug: "spring",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"springtime-in-madrid.md": {
  id: "springtime-in-madrid.md",
  slug: "springtime-in-madrid",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"start-of-the-championship-stay-safe-in-taiwan.md": {
  id: "start-of-the-championship-stay-safe-in-taiwan.md",
  slug: "start-of-the-championship-stay-safe-in-taiwan",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"still-studying.md": {
  id: "still-studying.md",
  slug: "still-studying",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"stinging-eyes-banshee-feet.md": {
  id: "stinging-eyes-banshee-feet.md",
  slug: "stinging-eyes-banshee-feet",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"studying.md": {
  id: "studying.md",
  slug: "studying",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sugar-lick-my-salty-chocolate-balls.md": {
  id: "sugar-lick-my-salty-chocolate-balls.md",
  slug: "sugar-lick-my-salty-chocolate-balls",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"summary-2021.md": {
  id: "summary-2021.md",
  slug: "summary-2021",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"summary-of-2012.md": {
  id: "summary-of-2012.md",
  slug: "summary-of-2012",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sunday-morning-sweatshop-run.md": {
  id: "sunday-morning-sweatshop-run.md",
  slug: "sunday-morning-sweatshop-run",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sunday-morning-winds.md": {
  id: "sunday-morning-winds.md",
  slug: "sunday-morning-winds",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sunday-morning.md": {
  id: "sunday-morning.md",
  slug: "sunday-morning",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sunday-night-live.md": {
  id: "sunday-night-live.md",
  slug: "sunday-night-live",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"sunshine-walk-along-the-river.md": {
  id: "sunshine-walk-along-the-river.md",
  slug: "sunshine-walk-along-the-river",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"svg.md": {
  id: "svg.md",
  slug: "svg",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ted-worklife-balance.md": {
  id: "ted-worklife-balance.md",
  slug: "ted-worklife-balance",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tfft.md": {
  id: "tfft.md",
  slug: "tfft",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-2013-tour-de-france.md": {
  id: "the-2013-tour-de-france.md",
  slug: "the-2013-tour-de-france",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-economy-of-keystrokes.md": {
  id: "the-economy-of-keystrokes.md",
  slug: "the-economy-of-keystrokes",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-other-side.md": {
  id: "the-other-side.md",
  slug: "the-other-side",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-rules.md": {
  id: "the-rules.md",
  slug: "the-rules",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-tallest-man-on-earth-walk-the-line.md": {
  id: "the-tallest-man-on-earth-walk-the-line.md",
  slug: "the-tallest-man-on-earth-walk-the-line",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"the-year-2010.md": {
  id: "the-year-2010.md",
  slug: "the-year-2010",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"this-is-the-week.md": {
  id: "this-is-the-week.md",
  slug: "this-is-the-week",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"thoughts-inbox.md": {
  id: "thoughts-inbox.md",
  slug: "thoughts-inbox",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"thursday-training.md": {
  id: "thursday-training.md",
  slug: "thursday-training",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"to-do-list.md": {
  id: "to-do-list.md",
  slug: "to-do-list",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"to-paris.md": {
  id: "to-paris.md",
  slug: "to-paris",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tonight-it-snew.md": {
  id: "tonight-it-snew.md",
  slug: "tonight-it-snew",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tony-parsons.md": {
  id: "tony-parsons.md",
  slug: "tony-parsons",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"trialling-eleventy.md": {
  id: "trialling-eleventy.md",
  slug: "trialling-eleventy",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tropical-music.md": {
  id: "tropical-music.md",
  slug: "tropical-music",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tuesday-fuckup.md": {
  id: "tuesday-fuckup.md",
  slug: "tuesday-fuckup",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"turbo-thursday.md": {
  id: "turbo-thursday.md",
  slug: "turbo-thursday",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"turbo-training.md": {
  id: "turbo-training.md",
  slug: "turbo-training",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"tweaky-ham-cycling.md": {
  id: "tweaky-ham-cycling.md",
  slug: "tweaky-ham-cycling",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"two-become-three.md": {
  id: "two-become-three.md",
  slug: "two-become-three",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"two-girl-kittens.md": {
  id: "two-girl-kittens.md",
  slug: "two-girl-kittens",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"update-2.md": {
  id: "update-2.md",
  slug: "update-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"update-and-change-rewire-and-rebirth.md": {
  id: "update-and-change-rewire-and-rebirth.md",
  slug: "update-and-change-rewire-and-rebirth",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"update-update-update.md": {
  id: "update-update-update.md",
  slug: "update-update-update",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"update.md": {
  id: "update.md",
  slug: "update",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"updating-site.md": {
  id: "updating-site.md",
  slug: "updating-site",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"usa-pro-road-race-champion.md": {
  id: "usa-pro-road-race-champion.md",
  slug: "usa-pro-road-race-champion",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"using-forecast-io-with-wordpress.md": {
  id: "using-forecast-io-with-wordpress.md",
  slug: "using-forecast-io-with-wordpress",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"ux-of-offline.md": {
  id: "ux-of-offline.md",
  slug: "ux-of-offline",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"vitality-points.md": {
  id: "vitality-points.md",
  slug: "vitality-points",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"vvc.md": {
  id: "vvc.md",
  slug: "vvc",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"water.md": {
  id: "water.md",
  slug: "water",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"web-dev-conf.md": {
  id: "web-dev-conf.md",
  slug: "web-dev-conf",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"webp.md": {
  id: "webp.md",
  slug: "webp",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"website-optimisation.md": {
  id: "website-optimisation.md",
  slug: "website-optimisation",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"wedding-and-website.md": {
  id: "wedding-and-website.md",
  slug: "wedding-and-website",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"wednesday-or-monday.md": {
  id: "wednesday-or-monday.md",
  slug: "wednesday-or-monday",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"wednesday-stress.md": {
  id: "wednesday-stress.md",
  slug: "wednesday-stress",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weekend-and-php-time.md": {
  id: "weekend-and-php-time.md",
  slug: "weekend-and-php-time",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weekend-and-studying.md": {
  id: "weekend-and-studying.md",
  slug: "weekend-and-studying",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weekend.md": {
  id: "weekend.md",
  slug: "weekend",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-1.md": {
  id: "weeknotes/2018/weeknotes-1.md",
  slug: "weeknotes/2018/weeknotes-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-10.md": {
  id: "weeknotes/2018/weeknotes-10.md",
  slug: "weeknotes/2018/weeknotes-10",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-11.md": {
  id: "weeknotes/2018/weeknotes-11.md",
  slug: "weeknotes/2018/weeknotes-11",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-12.md": {
  id: "weeknotes/2018/weeknotes-12.md",
  slug: "weeknotes/2018/weeknotes-12",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-2.md": {
  id: "weeknotes/2018/weeknotes-2.md",
  slug: "weeknotes/2018/weeknotes-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-3.md": {
  id: "weeknotes/2018/weeknotes-3.md",
  slug: "weeknotes/2018/weeknotes-3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-4.md": {
  id: "weeknotes/2018/weeknotes-4.md",
  slug: "weeknotes/2018/weeknotes-4",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-5.md": {
  id: "weeknotes/2018/weeknotes-5.md",
  slug: "weeknotes/2018/weeknotes-5",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-6.md": {
  id: "weeknotes/2018/weeknotes-6.md",
  slug: "weeknotes/2018/weeknotes-6",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-7.md": {
  id: "weeknotes/2018/weeknotes-7.md",
  slug: "weeknotes/2018/weeknotes-7",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-8.md": {
  id: "weeknotes/2018/weeknotes-8.md",
  slug: "weeknotes/2018/weeknotes-8",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2018/weeknotes-9.md": {
  id: "weeknotes/2018/weeknotes-9.md",
  slug: "weeknotes/2018/weeknotes-9",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-13.md": {
  id: "weeknotes/2019/weeknotes-13.md",
  slug: "weeknotes/2019/weeknotes-13",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-14.md": {
  id: "weeknotes/2019/weeknotes-14.md",
  slug: "weeknotes/2019/weeknotes-14",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-15.md": {
  id: "weeknotes/2019/weeknotes-15.md",
  slug: "weeknotes/2019/weeknotes-15",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-16.md": {
  id: "weeknotes/2019/weeknotes-16.md",
  slug: "weeknotes/2019/weeknotes-16",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-17.md": {
  id: "weeknotes/2019/weeknotes-17.md",
  slug: "weeknotes/2019/weeknotes-17",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-18.md": {
  id: "weeknotes/2019/weeknotes-18.md",
  slug: "weeknotes/2019/weeknotes-18",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-19.md": {
  id: "weeknotes/2019/weeknotes-19.md",
  slug: "weeknotes/2019/weeknotes-19",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-20.md": {
  id: "weeknotes/2019/weeknotes-20.md",
  slug: "weeknotes/2019/weeknotes-20",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-21.md": {
  id: "weeknotes/2019/weeknotes-21.md",
  slug: "weeknotes/2019/weeknotes-21",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-22.md": {
  id: "weeknotes/2019/weeknotes-22.md",
  slug: "weeknotes/2019/weeknotes-22",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-23.md": {
  id: "weeknotes/2019/weeknotes-23.md",
  slug: "weeknotes/2019/weeknotes-23",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-24.md": {
  id: "weeknotes/2019/weeknotes-24.md",
  slug: "weeknotes/2019/weeknotes-24",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-25.md": {
  id: "weeknotes/2019/weeknotes-25.md",
  slug: "weeknotes/2019/weeknotes-25",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-26.md": {
  id: "weeknotes/2019/weeknotes-26.md",
  slug: "weeknotes/2019/weeknotes-26",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-27.md": {
  id: "weeknotes/2019/weeknotes-27.md",
  slug: "weeknotes/2019/weeknotes-27",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2019/weeknotes-28.md": {
  id: "weeknotes/2019/weeknotes-28.md",
  slug: "weeknotes/2019/weeknotes-28",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-1.md": {
  id: "weeknotes/2020/weeknotes-2020-1.md",
  slug: "weeknotes/2020/weeknotes-2020-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-10.md": {
  id: "weeknotes/2020/weeknotes-2020-10.md",
  slug: "weeknotes/2020/weeknotes-2020-10",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-11.md": {
  id: "weeknotes/2020/weeknotes-2020-11.md",
  slug: "weeknotes/2020/weeknotes-2020-11",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-12.md": {
  id: "weeknotes/2020/weeknotes-2020-12.md",
  slug: "weeknotes/2020/weeknotes-2020-12",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-13.md": {
  id: "weeknotes/2020/weeknotes-2020-13.md",
  slug: "weeknotes/2020/weeknotes-2020-13",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-14.md": {
  id: "weeknotes/2020/weeknotes-2020-14.md",
  slug: "weeknotes/2020/weeknotes-2020-14",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-15.md": {
  id: "weeknotes/2020/weeknotes-2020-15.md",
  slug: "weeknotes/2020/weeknotes-2020-15",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-17.md": {
  id: "weeknotes/2020/weeknotes-2020-17.md",
  slug: "weeknotes/2020/weeknotes-2020-17",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-18.md": {
  id: "weeknotes/2020/weeknotes-2020-18.md",
  slug: "weeknotes/2020/weeknotes-2020-18",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-19.md": {
  id: "weeknotes/2020/weeknotes-2020-19.md",
  slug: "weeknotes/2020/weeknotes-2020-19",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-2.md": {
  id: "weeknotes/2020/weeknotes-2020-2.md",
  slug: "weeknotes/2020/weeknotes-2020-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-21.md": {
  id: "weeknotes/2020/weeknotes-2020-21.md",
  slug: "weeknotes/2020/weeknotes-2020-21",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-23.md": {
  id: "weeknotes/2020/weeknotes-2020-23.md",
  slug: "weeknotes/2020/weeknotes-2020-23",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-24.md": {
  id: "weeknotes/2020/weeknotes-2020-24.md",
  slug: "weeknotes/2020/weeknotes-2020-24",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-25.md": {
  id: "weeknotes/2020/weeknotes-2020-25.md",
  slug: "weeknotes/2020/weeknotes-2020-25",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-26.md": {
  id: "weeknotes/2020/weeknotes-2020-26.md",
  slug: "weeknotes/2020/weeknotes-2020-26",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-27.md": {
  id: "weeknotes/2020/weeknotes-2020-27.md",
  slug: "weeknotes/2020/weeknotes-2020-27",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-28.md": {
  id: "weeknotes/2020/weeknotes-2020-28.md",
  slug: "weeknotes/2020/weeknotes-2020-28",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-29.md": {
  id: "weeknotes/2020/weeknotes-2020-29.md",
  slug: "weeknotes/2020/weeknotes-2020-29",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-3.md": {
  id: "weeknotes/2020/weeknotes-2020-3.md",
  slug: "weeknotes/2020/weeknotes-2020-3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-30-33.md": {
  id: "weeknotes/2020/weeknotes-2020-30-33.md",
  slug: "weeknotes/2020/weeknotes-2020-30-33",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-34-35.md": {
  id: "weeknotes/2020/weeknotes-2020-34-35.md",
  slug: "weeknotes/2020/weeknotes-2020-34-35",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-39.md": {
  id: "weeknotes/2020/weeknotes-2020-39.md",
  slug: "weeknotes/2020/weeknotes-2020-39",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-4.md": {
  id: "weeknotes/2020/weeknotes-2020-4.md",
  slug: "weeknotes/2020/weeknotes-2020-4",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-44.md": {
  id: "weeknotes/2020/weeknotes-2020-44.md",
  slug: "weeknotes/2020/weeknotes-2020-44",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-45.md": {
  id: "weeknotes/2020/weeknotes-2020-45.md",
  slug: "weeknotes/2020/weeknotes-2020-45",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-46.md": {
  id: "weeknotes/2020/weeknotes-2020-46.md",
  slug: "weeknotes/2020/weeknotes-2020-46",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-47.md": {
  id: "weeknotes/2020/weeknotes-2020-47.md",
  slug: "weeknotes/2020/weeknotes-2020-47",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-48.md": {
  id: "weeknotes/2020/weeknotes-2020-48.md",
  slug: "weeknotes/2020/weeknotes-2020-48",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-49.md": {
  id: "weeknotes/2020/weeknotes-2020-49.md",
  slug: "weeknotes/2020/weeknotes-2020-49",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-5.md": {
  id: "weeknotes/2020/weeknotes-2020-5.md",
  slug: "weeknotes/2020/weeknotes-2020-5",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-50.md": {
  id: "weeknotes/2020/weeknotes-2020-50.md",
  slug: "weeknotes/2020/weeknotes-2020-50",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-6.md": {
  id: "weeknotes/2020/weeknotes-2020-6.md",
  slug: "weeknotes/2020/weeknotes-2020-6",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-7.md": {
  id: "weeknotes/2020/weeknotes-2020-7.md",
  slug: "weeknotes/2020/weeknotes-2020-7",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-8.md": {
  id: "weeknotes/2020/weeknotes-2020-8.md",
  slug: "weeknotes/2020/weeknotes-2020-8",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2020/weeknotes-2020-9.md": {
  id: "weeknotes/2020/weeknotes-2020-9.md",
  slug: "weeknotes/2020/weeknotes-2020-9",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2021/weeknotes-2020-53.md": {
  id: "weeknotes/2021/weeknotes-2020-53.md",
  slug: "weeknotes/2021/weeknotes-2020-53",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2021/weeknotes-2021-33.md": {
  id: "weeknotes/2021/weeknotes-2021-33.md",
  slug: "weeknotes/2021/weeknotes-2021-33",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2021/weeknotes-2021-34.md": {
  id: "weeknotes/2021/weeknotes-2021-34.md",
  slug: "weeknotes/2021/weeknotes-2021-34",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2021/weeknotes-2021-35.md": {
  id: "weeknotes/2021/weeknotes-2021-35.md",
  slug: "weeknotes/2021/weeknotes-2021-35",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2021/weeknotes-2021-40.md": {
  id: "weeknotes/2021/weeknotes-2021-40.md",
  slug: "weeknotes/2021/weeknotes-2021-40",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2021/weeknotes-2021-41.md": {
  id: "weeknotes/2021/weeknotes-2021-41.md",
  slug: "weeknotes/2021/weeknotes-2021-41",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2021/weeknotes-2021-43.md": {
  id: "weeknotes/2021/weeknotes-2021-43.md",
  slug: "weeknotes/2021/weeknotes-2021-43",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2021/weeknotes-2021-47.md": {
  id: "weeknotes/2021/weeknotes-2021-47.md",
  slug: "weeknotes/2021/weeknotes-2021-47",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2021/weeknotes-2021-52.md": {
  id: "weeknotes/2021/weeknotes-2021-52.md",
  slug: "weeknotes/2021/weeknotes-2021-52",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2022/weeknotes-2022-1.md": {
  id: "weeknotes/2022/weeknotes-2022-1.md",
  slug: "weeknotes/2022/weeknotes-2022-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2022/weeknotes-2022-2.md": {
  id: "weeknotes/2022/weeknotes-2022-2.md",
  slug: "weeknotes/2022/weeknotes-2022-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2022/weeknotes-2022-3.md": {
  id: "weeknotes/2022/weeknotes-2022-3.md",
  slug: "weeknotes/2022/weeknotes-2022-3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2022/weeknotes-2022-4.md": {
  id: "weeknotes/2022/weeknotes-2022-4.md",
  slug: "weeknotes/2022/weeknotes-2022-4",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2022/weeknotes-2022-5.md": {
  id: "weeknotes/2022/weeknotes-2022-5.md",
  slug: "weeknotes/2022/weeknotes-2022-5",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2022/weeknotes-2022-7.md": {
  id: "weeknotes/2022/weeknotes-2022-7.md",
  slug: "weeknotes/2022/weeknotes-2022-7",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2022/weeknotes-2022-8.md": {
  id: "weeknotes/2022/weeknotes-2022-8.md",
  slug: "weeknotes/2022/weeknotes-2022-8",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2022/weeknotes-2022-9.md": {
  id: "weeknotes/2022/weeknotes-2022-9.md",
  slug: "weeknotes/2022/weeknotes-2022-9",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2023/weeknotes-2023-1.md": {
  id: "weeknotes/2023/weeknotes-2023-1.md",
  slug: "weeknotes/2023/weeknotes-2023-1",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2023/weeknotes-2023-2.md": {
  id: "weeknotes/2023/weeknotes-2023-2.md",
  slug: "weeknotes/2023/weeknotes-2023-2",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2023/weeknotes-2023-3.md": {
  id: "weeknotes/2023/weeknotes-2023-3.md",
  slug: "weeknotes/2023/weeknotes-2023-3",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2023/weeknotes-2023-4.md": {
  id: "weeknotes/2023/weeknotes-2023-4.md",
  slug: "weeknotes/2023/weeknotes-2023-4",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"weeknotes/2023/weeknotes-2023-5.md": {
  id: "weeknotes/2023/weeknotes-2023-5.md",
  slug: "weeknotes/2023/weeknotes-2023-5",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"welcome-back-wc.md": {
  id: "welcome-back-wc.md",
  slug: "welcome-back-wc",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"were-thru-to-the-vth-round-of-the-fa-cup.md": {
  id: "were-thru-to-the-vth-round-of-the-fa-cup.md",
  slug: "were-thru-to-the-vth-round-of-the-fa-cup",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"what-is-a-component.md": {
  id: "what-is-a-component.md",
  slug: "what-is-a-component",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"while-everyone-was-doing-the-marathon.md": {
  id: "while-everyone-was-doing-the-marathon.md",
  slug: "while-everyone-was-doing-the-marathon",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"while-it-rains-i-run.md": {
  id: "while-it-rains-i-run.md",
  slug: "while-it-rains-i-run",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"whitley-with-hw-group.md": {
  id: "whitley-with-hw-group.md",
  slug: "whitley-with-hw-group",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"wiggo-into-the-sky.md": {
  id: "wiggo-into-the-sky.md",
  slug: "wiggo-into-the-sky",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"with-cesar.md": {
  id: "with-cesar.md",
  slug: "with-cesar",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"work-doesnt-happen-work.md": {
  id: "work-doesnt-happen-work.md",
  slug: "work-doesnt-happen-work",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"writing-from-w-bloggar.md": {
  id: "writing-from-w-bloggar.md",
  slug: "writing-from-w-bloggar",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"xkcd.md": {
  id: "xkcd.md",
  slug: "xkcd",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"yorkshire-tour-de-france-2014-grand-depart.md": {
  id: "yorkshire-tour-de-france-2014-grand-depart.md",
  slug: "yorkshire-tour-de-france-2014-grand-depart",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
