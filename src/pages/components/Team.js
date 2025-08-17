import "../styles/Team.css";
import neeha from '../images/team/neehakurelli.jpg'
import jesse from '../images/team/jesseding.jpg'
import jeffery from '../images/team/jefferyjohn.jpg'
import tanisha from '../images/team/tanishasaxena.jpg'
import aarav from '../images/team/aaravbajaj.jpg'
import alexis from '../images/team/alexisduong.jpg'
import jackson from '../images/team/jacksonchen.jpg'
import katie from '../images/team/katieguo.jpg'
import yichuan from '../images/team/yichuanluo.jpg'

const Team = () => {
    return (
        <div className="team-page">
      <div className="team-header"></div>{" "}
      {/* used to line up the scroll correctly */}
      <div className="team-title">Team</div>
      <br></br>
      <div className="team-content">
      <div class="section" id="team">
            <div id="photos">
                <a href="https://www.linkedin.com/in/nkurelli/"><img src={neeha}
                        data-src={neeha} alt="Neeha Kurelli" width="10%" /></a>
                <a href="https://www.linkedin.com/in/jesse-ding/"><img src={jesse}
                    data-src={jesse} alt="Jesse Ding" width="10%" /></a>
                <a href="https://www.linkedin.com/in/jefferyjohn/"><img src={jeffery}
                    data-src={jeffery} alt="Jeffeyr John" width="10%" /></a>
                <a href="https://www.linkedin.com/in/tanishasaxena/"><img src={tanisha}
                    data-src={tanisha} alt="Tanisha Saxena" width="10%"/></a>
                <a href="https://www.linkedin.com/in/aarav-bajaj-408ab01b1/"><img src={aarav}
                    data-src={aarav} alt="Aarav Bajaj" width="10%" /></a>
                <a href="https://www.linkedin.com/in/alexis-duong/"><img src={alexis}
                    data-src={alexis} alt="Alexis Doung" width="10%" /></a>
                <a href="https://www.linkedin.com/in/jacksoncmu/"><img src={jackson}
                    data-src={jackson} alt="Jackson Chen" width="10%" /></a>
                <a href="https://www.linkedin.com/in/kt-g/"><img src={katie}
                    data-src={katie} alt="Katie Guo" width="10%" /></a>
                <a href="https://www.linkedin.com/in/yichuanl/"><img src={yichuan}
                    data-src={yichuan} alt="Yichuan Luo" width="10%" /></a>
            </div>
        </div>
      </div>
      <div className="team-footer"></div>
    </div>
        
    );
};

export default Team;
