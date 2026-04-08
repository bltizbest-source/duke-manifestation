import Image from 'next/image';
import styles from '@/components/home/HomePage.module.css';
import PrimaryNav from '@/components/home/PrimaryNav';
import {
  awards,
  experienceStats,
  featuredCategories,
  heroHighlights,
  locations,
  menuMoments,
  reviews,
  siteMeta
} from '@/lib/site-content';

function SectionIntro({ eyebrow, title, body, align = 'left' }) {
  return (
    <div className={`${styles.sectionIntro} ${align === 'center' ? styles.centered : ''}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.heroStage}>
        <div className={styles.heroImageFrame}>
          <Image
            src={siteMeta.heroImage}
            alt="Close-up barbecue ribs dish from The Duke's"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Welcome to</p>
            <Image
              src={siteMeta.logo}
              alt="The Duke's logo"
              width={340}
              height={157}
              priority
              className={styles.heroBrandLogo}
            />
            <h1 className={styles.heroHeadline}>
              <span>No games... no claims...</span>
              <span className={styles.heroHeadlineAccent}>just great food...</span>
            </h1>
            <p className={styles.heroText}>
              Award-winning pizza, ribs, burgers, salads, and steaks served in generous portions
              across Chiang Mai with dine-in, pickup, and delivery kept simple.
            </p>

            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#menu">
                View Menu
              </a>
              <a className={styles.secondaryButton} href={siteMeta.orderUrl} target="_blank" rel="noreferrer">
                Order Online
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.heroSupportRow}>
        <div className={styles.heroSupportLeft}>
          <div className={styles.heroDishCards}>
            {heroHighlights.map((item) => (
              <div key={item.label} className={styles.highlightCard}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroFoodStrip}>
            <div className={styles.heroFoodCardLarge}>
              <Image
                src={siteMeta.heroStripPrimary}
                alt="Seafood plate from The Duke's in Chiang Mai"
                fill
                sizes="(max-width: 820px) 100vw, 44vw"
                className={styles.heroFoodImage}
              />
            </div>

            <div className={styles.heroFoodCardSmall}>
              <Image
                src={siteMeta.heroStripSecondary}
                alt="Fresh tuna salad from The Duke's"
                fill
                sizes="(max-width: 820px) 100vw, 20vw"
                className={styles.heroFoodImage}
              />
            </div>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <p className={styles.panelEyebrow}>Plan your visit</p>
          <h2 className={styles.heroPanelTitle}>Dinner without the guesswork.</h2>
          <div className={styles.panelList}>
            <div>
              <span>Dine in</span>
              <strong>Comfort food classics, full service, and portions worth showing up for</strong>
            </div>
            <div>
              <span>Directions</span>
              <strong>Pick the closest branch and head straight there</strong>
            </div>
            <div>
              <span>Delivery</span>
              <strong>Meals on Wheels 4U and Grab available when you want Duke&apos;s at home</strong>
            </div>
          </div>
          <div className={styles.heroPanelActions}>
            <a className={styles.primaryButton} href={siteMeta.mapsFallback} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
            <a className={styles.secondaryButton} href={siteMeta.orderUrl} target="_blank" rel="noreferrer">
              Order Pickup
            </a>
          </div>
        </aside>
      </div>

      <div className={styles.heroBackdropDecor}>
        <div className={styles.heroCurve} />
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className={styles.statsStrip}>
      {experienceStats.map((stat) => (
        <div key={stat.label} className={styles.statCard}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

function FeaturedCategories() {
    return (
      <section className={styles.section} id="menu">
        <SectionIntro
          eyebrow="Signature menu"
          title="Built for cravings that deserve more than a quick bite."
          body="The current brand already has the right strengths: scale, variety, freshness, and made-from-scratch credibility. The redesign makes those strengths feel premium and irresistible."
        />

        <div className={styles.categoryGrid}>
          {featuredCategories.map((item) => (
            <article key={item.title} className={styles.categoryCard}>
              <div className={styles.categoryImageWrap}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.categoryImage}
                />
              </div>
              <div className={styles.categoryBody}>
                <p className={styles.cardEyebrow}>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
}

function StorySection() {
  return (
    <section className={`${styles.section} ${styles.storySection}`} id="story">
      <div className={styles.storyMedia}>
        <div className={styles.storyImageLarge}>
          <Image
            src={siteMeta.storyImagePrimary}
            alt="Close-up of The Duke's ribs plate"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.storyImage}
          />
        </div>
        <div className={styles.storyImageSmall}>
          <Image
            src={siteMeta.storyImageSecondary}
            alt="Close-up salmon dish from The Duke's"
            fill
            sizes="(max-width: 900px) 60vw, 28vw"
            className={styles.storyImage}
          />
        </div>
      </div>

      <div className={styles.storyCopy}>
        <SectionIntro
          eyebrow="Brand story"
          title="Not a themed tourist stop. A real American institution locals trust."
          body="The strongest repositioning move is to elevate The Duke's from 'western food option' to 'the place in Chiang Mai for a proper American meal.' That means leaning into legacy, abundance, and made-daily craft without losing warmth."
        />

        <div className={styles.storyPoints}>
          <div>
            <strong>Scratch-made, every day</strong>
            <p>Sauces, breads, soups, dressings, and cakes are still made in-house, just as they have been for years.</p>
          </div>
          <div>
            <strong>Comfort with standards</strong>
            <p>Imported steaks, natural ingredients, cook-to-order pizza, and hearty portions signal quality before the first bite lands.</p>
          </div>
          <div>
            <strong>Designed for locals and travelers</strong>
            <p>Fast directional choices, branch discovery, and delivery paths reduce friction for both returning regulars and first-time visitors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuMoments() {
  return (
    <section className={`${styles.section} ${styles.menuMomentsSection}`}>
      <SectionIntro
        eyebrow="Menu engagement"
        title="Make the menu feel like a decision you want to keep scrolling."
        body="Instead of dumping page images in a long stack, the redesign curates the most profitable appetite triggers first and uses the full menu as a deeper browse path."
        align="center"
      />

      <div className={styles.menuMomentGrid}>
        {menuMoments.map((item) => (
          <article key={item.title} className={styles.menuMomentCard}>
            <div className={styles.menuMomentImageWrap}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.menuMomentImage}
              />
            </div>
            <div className={styles.menuMomentBody}>
              <p className={styles.cardEyebrow}>{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a href={item.href} target="_blank" rel="noreferrer">
                View full section
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className={`${styles.section} ${styles.awardsSection}`}>
      <SectionIntro
        eyebrow="Proof"
        title="Recognition matters more when it supports a stronger first impression."
        body="The current site has useful trust assets, but they are visually buried. Here they become a concise credibility band between appetite and action."
      />

      <div className={styles.awardsGrid}>
        {awards.map((award) => (
          <a
            key={award.name}
            className={styles.awardCard}
            href={award.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.awardLogoWrap}>
              <Image src={award.logo} alt={award.name} width={120} height={72} />
            </div>
            <strong>{award.name}</strong>
            <span>{award.note}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className={styles.section} id="reviews">
      <SectionIntro
        eyebrow="Customer voice"
        title="Social proof that reinforces size, taste, and consistency."
        body="The best review strategy here is not volume. It is pattern recognition: portions, pizza, steaks, and reliability appear again and again, which lowers first-visit hesitation."
      />

      <div className={styles.reviewGrid}>
        {reviews.map((review) => (
          <article key={review.title} className={styles.reviewCard}>
            <p className={styles.reviewQuote}>&ldquo;{review.quote}&rdquo;</p>
            <strong>{review.title}</strong>
            <span>{review.source}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section className={`${styles.section} ${styles.locationsSection}`} id="locations">
      <SectionIntro
        eyebrow="Visit a branch"
        title="Turn local intent and tourist discovery into immediate foot traffic."
        body="Location discovery is the highest-value conversion point after menu browsing. This design makes every branch actionable with phone, hours, and one-tap map behavior."
      />

      <div className={styles.locationsGrid}>
        {locations.map((location) => (
          <article key={location.name} className={styles.locationCard}>
            <div>
              <p className={styles.cardEyebrow}>{location.label}</p>
              <h3>{location.name}</h3>
              <p>{location.hours}</p>
              <a className={styles.locationPhone} href={`tel:${location.phoneRaw}`}>
                {location.phoneDisplay}
              </a>
            </div>
            <div className={styles.locationActions}>
              <a className={styles.primaryButton} href={location.mapUrl} target="_blank" rel="noreferrer">
                Directions
              </a>
              <a className={styles.secondaryButton} href={location.deliveryUrl} target="_blank" rel="noreferrer">
                Delivery
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className={`${styles.section} ${styles.closingCta}`}>
      <div className={styles.closingCard}>
        <p className={styles.eyebrow}>Conversion close</p>
        <h2>The fastest way to win dinner is to make the next action obvious.</h2>
        <p>
          Whether someone wants directions, a menu preview, pickup, or delivery, the redesigned
          homepage answers the intent within a few seconds and keeps appetite front and center.
        </p>
        <div className={styles.heroActions}>
          <a className={styles.primaryButton} href={siteMeta.orderUrl} target="_blank" rel="noreferrer">
            Order Pickup
          </a>
          <a className={styles.secondaryButton} href={siteMeta.instagramUrl} target="_blank" rel="noreferrer">
            Follow the Food
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className={styles.pageShell}>
      <PrimaryNav navLogo={siteMeta.navLogo} orderUrl={siteMeta.orderUrl} />
      <Hero />
      <StatsStrip />
      <FeaturedCategories />
      <StorySection />
      <MenuMoments />
      <AwardsSection />
      <ReviewsSection />
      <LocationsSection />
      <ClosingCta />
    </main>
  );
}
