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
      <div className={styles.heroImageFrame}>
        <Image
          src={siteMeta.heroImage}
          alt="Close-up barbecue ribs dish from The Duke's"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>

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
    </section>
  );
}

function HeroSupport() {
  return (
    <section className={styles.heroSupportSection}>
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
        <div className={styles.sectionInner}>
          <SectionIntro
          eyebrow="Signature menu"
          title="Fresh, Hearty, and Scratch-Made Daily"
          body="Sauces, breads, soups, dressings, and cakes are created in-house every day using the best local and imported ingredients."
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
        </div>
      </section>
    );
}

function StorySection() {
  return (
    <section className={styles.section} id="story">
      <div className={`${styles.sectionInner} ${styles.storySection}`}>
        <div className={styles.storyMedia}>
          <div className={styles.storyImageLarge}>
            <Image
              src={siteMeta.storyImagePrimary}
              alt="Gourmet American bacon cheeseburger and fries"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.storyImage}
            />
          </div>
        </div>

        <div className={styles.storyCopy}>
          <SectionIntro
            eyebrow="Brand story"
            title="Down-to-Earth Scratch Cooking Since 2005"
            body="We've always made our food fresh and cooked to order, using high-quality local and imported ingredients even before it became a trend."
          />

          <div className={styles.storyPoints}>
            <div>
            <strong>Scratch-made, every day</strong>
            <p>Chiang Mai’s original scratch kitchen since 2005. We still create our own homemade sauces, breads, soups, dressings, and cakes every day.</p>
          </div>
            <div>
            <strong>Comfort with standards</strong>
            <p>Imported steaks, natural ingredients, and hearty portions—The Duke himself loves a fresh salad with homemade dressing—signal quality from the first bite.</p>
          </div>
            <div>
            <strong>Designed for locals and travelers</strong>
            <p>Branch discovery and delivery paths via Meals on Wheels 4U—Chiang Mai’s only locally owned delivery service—reduce friction for everyone.</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuMoments() {
  return (
    <section className={`${styles.section} ${styles.menuMomentsSection}`}>
      <div className={styles.sectionInner}>
        <SectionIntro
        eyebrow="Menu engagement"
        title="Food First. Great Food and Lots of It."
        body="Try The Duke’s yourself and learn why customers who want great western food in Chiang Mai keep coming back again and again."
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
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className={`${styles.section} ${styles.awardsSection}`}>
      <div className={styles.sectionInner}>
        <SectionIntro
        eyebrow="Proof"
        title="Chiang Mai's Favorite American Institution"
        body="The Duke's has served over a million meals and won multiple awards for our steaks, ribs, and service since 2005."
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
            <div
              className={`${styles.awardLogoWrap} ${award.logoTheme === 'inverse' ? styles.awardLogoWrapInverse : ''}`}
            >
              <div
                className={`${styles.awardLogoFrame} ${award.logoTheme === 'inverse' ? styles.awardLogoFrameInverse : ''}`}
              >
                <Image
                  src={award.logo}
                  alt={award.name}
                  fill
                  sizes="(max-width: 820px) 72vw, (max-width: 1100px) 44vw, 22vw"
                  className={styles.awardLogoImage}
                />
              </div>
            </div>
            <strong>{award.name}</strong>
            <span>{award.note}</span>
          </a>
        ))}
      </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className={styles.section} id="reviews">
      <div className={styles.sectionInner}>
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
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section className={`${styles.section} ${styles.locationsSection}`} id="locations">
      <div className={styles.sectionInner}>
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
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className={`${styles.section} ${styles.closingCta}`}>
      <div className={styles.sectionInner}>
        <div className={styles.closingCard}>
        <p className={styles.eyebrow}>Conversion close</p>
        <h2>The fastest way to win dinner is to make the next action obvious.</h2>
        <p>
          Whether someone wants directions, a menu preview, or the latest monthly burger specials on Facebook, the redesigned
          homepage answers the intent within a few seconds.
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
      </div>
    </section>
  );
}

function SiteFooter() {
  const quickLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Locations', href: '#locations' },
    { label: 'Story', href: '#story' },
    { label: 'Reviews', href: '#reviews' }
  ];

  const primaryLocation = locations[0];

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <a href="#top" className={styles.footerLogoLink} aria-label="Back to top">
            <Image src={siteMeta.navLogo} alt="The Duke's logo" width={184} height={76} className={styles.footerLogo} />
          </a>
          <p>
            American comfort classics in Chiang Mai since 2005. Support locally owned delivery via Meals on Wheels 4U.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Explore</h3>
          <nav className={styles.footerNav} aria-label="Footer links">
            {quickLinks.map((link) => (
              <a key={link.label} className={styles.footerLink} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <a className={styles.footerLink} href={siteMeta.mapsFallback} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
          {primaryLocation ? (
            <a className={styles.footerLink} href={`tel:${primaryLocation.phoneRaw}`}>
              {primaryLocation.phoneDisplay}
            </a>
          ) : null}
          <a className={styles.footerLink} href={siteMeta.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className={styles.footerLink} href="https://www.facebook.com/thedukeschiangmai/" target="_blank" rel="noreferrer">
            Facebook (Burger Specials)
          </a>
        </div>

        <div className={styles.footerColumn}>
          <h3>Order</h3>
          <a className={styles.primaryButton} href={siteMeta.orderUrl} target="_blank" rel="noreferrer">
            Order Pickup
          </a>
        </div>
      </div>

      <div className={styles.footerLegal}>
        <p>&copy; {new Date().getFullYear()} The Duke&apos;s Chiang Mai. All rights reserved.</p>
        <p className={styles.attribution}>
          by <a href="https://digitalchili.co.th/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>digital chili</a>
        </p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className={styles.pageShell}>
      <PrimaryNav navLogo={siteMeta.navLogo} orderUrl={siteMeta.orderUrl} />
      <Hero />
      <HeroSupport />
      <StatsStrip />
      <FeaturedCategories />
      <StorySection />
      <MenuMoments />
      <AwardsSection />
      <ReviewsSection />
      <LocationsSection />
      <ClosingCta />
      <SiteFooter />
    </main>
  );
}
