import { Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"
import AnimatedPage from "../components/Animation/AnimatedPage"

const Faq = () => {
  return (
    <AnimatedPage>
      <Typography align="center" fontWeight={700} fontSize={21} marginBottom="5%">FAQ</Typography>

      <Box>
        <Typography fontWeight={700} fontSize={18}>INTRODUCTION</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          CSGO-Rep.com is a platform created for traders by traders. Our objective is to provide a platform where you can safely choose who you trade with, as well as provide you with a way to start your journey in this community.
        </Typography>
      </Box>

      <br />

      <Box>
        <Typography fontWeight={700} fontSize={18}>WHAT IS A FEEDBACK?</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          A Feedback, also known as "rep" or "reputation", is essentially a rating that you can write on someone's profile after you've completed a trade with someone (and the other user can do the same for you).
          <br />
          If you successfully complete a trade involving something outside of the Steam trading window (which means someone had to send something first, expecting the other user to finish the agreement), it's important to make sure to write Feedback on that user's profile so that the community can check the user's trade history in the future and it'll help everyone make a decision next time they're looking to complete a transaction.
        </Typography>
      </Box>

      <br />

      <Box>
        <Typography fontWeight={700} fontSize={18}>WHAT DOES POSITIVE AND NEUTRAL FEEDBACK MEAN? WHY IS THERE NO NEGATIVE OPTION?</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          Feedback can only have one of two ratings, positive and neutral.
          <br />
          Positive should be used when a trade is completed successfully without any kind of issues, both users felt completely comfortable during the whole process, the user was reasonable, no sudden unjustified change of plans and the transaction was an overall great experience.
          <br />
          Neutral should be used when a trade is completed successfully, but there was an issue. This can be due to a wide variety of reasons, the trade was started and the user disappeared for days without notice, the trade is halfway done and the user decides to back down and revert everything, or any other situation that makes you feel uncomfortable and have an unpleasant experience.
          <br />
          Negative feedback does not exist in CSGO-Rep. The reason for this is, if someone is worthy of a negative feedback, it means the user scammed someone, in which case a report is filed against that user and the user will be banned for that action. In other words, negative feedback is replaced by a direct ban to the user at fault.
        </Typography>
      </Box>

      <br />

      <Box>
        <Typography fontWeight={700} fontSize={18}>HOW DO I REPORT A FAKE / SPAM FEEDBACK?</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          No, it does not.
          <br />
          While feedback is a great way to see someone's past trades and the overall experience other users have had with a specific user, it is not a guarantee that everything will go well with your transaction.
          <br />
          Feedback should only be used as a way to quickly check the trades someone has made in the past and have a general idea of the experience you can expect when trading with that user.
          <br />
          However, if someone is banned for scamming, it is strongly advised not to go through with any transaction with this user, as it is very likely that something will go wrong.
        </Typography>
      </Box>

      <br />

      <Box>
        <Typography fontWeight={700} fontSize={18}>WHAT IS MIDDLEMAN FEEDBACK?</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          Middleman feedback is a specific type of feedback that is given when a person that's not the seller or buyer assists in the trade by holding the item / money from one user until the other party goes through with the transaction.
          <br />
          Middleman feedback should only be given to the person assisting with the trade, not to the seller or buyer.
        </Typography>
      </Box>

      <br />

      <Box>
        <Typography fontWeight={700} fontSize={18}>CAN I WRITE FEEDBACK FOR SELLING GENUINE PINS, ARTWORK, OR SOMETHING ELSE OTHER THAN ITEMS / BALANCE?</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          This site is aimed at transactions directly related to the biggest games with an active and large economy on Steam. For that reason, external things such as artwork (even if it's related to the game) or other kind of services should not be the reason of a feedback.
          <br />
          Genuine pins are a part of the game and for that reason it is allowed to write feedback for the transaction of Genuine pins. However, the buyer of the pin must have the pin activated on his own inventory after the trade is complete in order for the feedback to be valid. This means feedback for reselling pins should not be here.
        </Typography>
      </Box>

      <br />

      <Box>
        <Typography fontWeight={700} fontSize={18}>WHAT KIND OF BALANCE TRANSACTION CAN I WRITE FEEDBACK ABOUT?</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          For the time being, Buff balance transactions are the only ones accepted.
          <br />
          Transactions that involve any other site or site balance, be it a marketplace or a gambling site, will not count as a valid transaction or form of payment.
        </Typography>
      </Box>

      <br />

      <Box>
        <Typography fontWeight={700} fontSize={18}>CAN I WRITE FEEDBACKS IN ANY LANGUAGE?</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          Feedbacks can only be written in English.
        </Typography>
      </Box>

      <br />

      <Box>
        <Typography fontWeight={700} fontSize={18}>I AM BANNED, WHAT DO I DO?</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          If you believe you were incorrectly banned, <Link to="/contact" style={{ color: "lightblue", textDecoration: "none", "&:hover": {color: "blue"} }}>contact us</Link>
        </Typography>
      </Box>

      <br />

      <Box>
        <Typography fontWeight={700} fontSize={18}>A STAFF MEMBER FROM CSGO-REP MESSAGED ME, IS THIS REAL?</Typography>
        <br />
        <Typography fontWeight={500} fontSize="100%" color="gray">
          Staff members will only contact you via Steam, Twitter or email. Make sure the Twitter account is @CSGORepCom and the email address ends with @csgo-rep.com.
          <br />
          Staff members will NEVER contact you via Discord, reddit, Facebook, or any other platform that's not described here.
        </Typography>
      </Box>

    </AnimatedPage>
  )
}

export default Faq