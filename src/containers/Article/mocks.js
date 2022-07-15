import React from 'react'

import RouteURL from '~routes'

import Card from '~components/StructuredContent/components/Card'

export const BREADCRUMBS = [
  { text: 'Blog', url: RouteURL.BLOG },
  { text: 'Category name', url: RouteURL.BLOG },
  { text: 'How To Do Your Own Research (“DYOR”)', isActive: true },
]

const CARDS = [
  {
    heading: 'What is the value proposition of a project?',
    content: (
      <p>
        Is there future utility (a game, a token, an airdrop, breeding
        mechanics, exclusive access/membership etc.)? As the space evolves, the
        presence of differentiators continues to become more and more essential
        to success.
      </p>
    ),
  },
  {
    heading: 'How have similar collection sizes performed recently?',
    content: (
      <p>
        Compare in terms of hype, following, and mint price. Too many projects
        struggle to correctly price their mint and it can ruin the project
        before it even gets off the ground.
      </p>
    ),
  },
  {
    heading: 'What is the community like?',
    content: (
      <p>
        Is there a large and ACTIVE twitter following or only a couple hundred
        people on Discord? Having a huge number of followers isn’t essential to
        success but it does offer credibility. Equally, be aware of
        followers-for-pay scams and programs that can artificially inflate
        numbers.
      </p>
    ),
  },
  {
    heading: 'Are there any identical projects out there?',
    content: (
      <p>
        Whether on a secondary market or an upcoming mint. Is it just a copycat
        or is there something unique that adds value? If you can’t answer that
        question, it’s probably worth passing.
      </p>
    ),
  },
]

export const ARTICLE_CONTENT = (
  <>
    <h1>How To Do Your Own Research (“DYOR”)</h1>
    <p>
      You will frequently see some sort of recommendation followed by “DYOR –
      this does not constitute financial advice” disclaimer as a means to avoid
      any backlash if you do decide to listen to them and lose money on the
      project.
    </p>
    <p>
      The reality is, for anything you plan on buying or investing in, you
      should always perform your own due diligence. NFTs are no different. It’s
      best to be cautious because you alone are responsible for your investments
      and financial well-being!
    </p>
    <p>
      But, following these steps has helped me be more successful in identifying
      quality projects while avoiding rugs...
    </p>
    <h2>Preliminary evaluation</h2>
    <p>
      Firstly, ask yourself: Do you like the art, collection size, mint price
      and foundational project elements? Here are some important questions to
      consider:
    </p>
    {CARDS.map(({ heading, content }) => (
      <Card key={heading} heading={heading}>
        {content}
      </Card>
    ))}
    <h2>Assess the project&apos;s potential and team</h2>
    <p>
      Look at the project’s website. Key factors to evaluate include the
      roadmap, project team, overall thoughtfulness and quality of the site. It
      is usually pretty easy to tell if a site was thrown together for a quick
      cash-grab. A team that spends a lot of time making sure their website (and
      socials) are all consistent, clear and free of errors is often indicative
      of the quality of the project.
    </p>
    <p>
      If a team’s baseline website and marketing materials are high quality, it
      is more likely than not they will apply the same type of diligence on
      future items on the project’s roadmap.
    </p>
    <p>
      Roadmap: A well-articulated plan can put collectors at ease before buying
      into a project. Every collector has their own criteria they look for in a
      “good” roadmap: royalties, utility, project tokens, charity donations,
      merchandise, community spaces and many others. There is no right or wrong
      answer here. Your evaluation should be aligned with what you are looking
      for as a collector.
    </p>
    <p>
      Team: Is the team public about their identities (e.g. links to their
      Twitter, LinkedIn, Discord)? Creators doxxing themselves isn’t required
      but having a positive reputation in the crypto world goes a really long
      way, even if the person chooses to remain anonymous. I look for team
      members with past Crypto/NFT experience, relevant skill sets/backgrounds
      and a passion for the project.
    </p>
    <p>
      Evaluate their Twitter and Discord
      <br />
      With so many ‘paid promoters’ of projects out there, it can be challenging
      to evaluate the authenticity of projects. Identifying projects with large
      followings and communities versus the projects that only appear to have
      large projects and communities can be difficult and require time and
      effort.
    </p>
    <p>
      It is more important to look at the quality of the followers by getting a
      feel for their level of engagement than it is to look purely at the
      numbers.
    </p>
    <p>
      Twitter: As an example, check out how many people are replying to tweets
      as opposed to the number of retweets (which can be easily bought). It is
      also important to scroll through some of the likes and retweets and
      validate that the accounts are real, have real profile pictures, a bio,
      and are regularly tweeting from their own accounts (not just entering in
      paid promotions and giveaways).
    </p>
    <p>
      Discord: Similar to Twitter, bots can easily be bought as part of paid
      promotions. I like to check the general chat channels and see active
      discourse from many engaged users, as well as evaluate the number of
      “online” users as a percentage of total members of the server (paid bots
      often default to offline after the initial ‘join’). I aim to see between
      10-30% online depending on the project size and time of day.
    </p>
    <h2>Don’t underestimate your gut feeling</h2>
    <p>
      There are so many scams and rugs out there, even some that are really well
      put together, and may even get past the first three steps above. You need
      to trust your own instincts. If a project seems too good to be true, it
      probably is. ALWAYS use a “burner” wallet with only the amount of SOL/ETH
      required to cover mint cost plus fees (with no NFTs in it).
    </p>
    <p>
      Some projects have stealth mints with limited warning and sell out
      instantly, so it can be challenging to get a feeling for the authenticity
      and requires quicker decision-making. While others have slower mints that
      allow you to evaluate minting progress and perform a deeper dive into
      Twitter and Discord for confirmation of a project’s legitimacy.
    </p>
  </>
)
