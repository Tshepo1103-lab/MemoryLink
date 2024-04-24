import { AimOutlined, EyeOutlined, HeartOutlined} from '@ant-design/icons';
import { Card } from 'antd';
import { useStyles } from './style/style';


const cardsData = [
    {
      title: "OUR MISSION",
      icon: <AimOutlined />,
      content: "At MemoryLink, our mission is to bridge the gap between patients with memory loss and their families by providing a comprehensive web application that facilitates connection and reunification. We aim to empower doctors by offering a platform where they can securely input patient details, enabling efficient search efforts for missing relatives. Simultaneously, we strive to offer individuals seeking their loved ones a user-friendly interface equipped with robust search, browsing, and community engagement tools. Through our mission, we seek to bring hope, comfort, and relief to families affected by memory loss, fostering connections and enriching lives.",
    },
    {
      title: "OUR VISION",
      icon: <EyeOutlined />,
      content: "Our vision at MemoryLink is to become the leading platform for connecting patients with memory loss and their families worldwide. We envision a future where no family has to endure the pain of separation due to memory loss, and where our platform serves as a beacon of hope and support for those in need. We aspire to continually innovate and expand our services, leveraging technology to enhance the search and reunification process. Ultimately, we envision a world where every individual affected by memory loss can find solace and connection through MemoryLink.",
    },
    {
      title: "OUR VALUES",
      icon: <HeartOutlined />,
      content: "At MemoryLink, we are guided by a set of core values that underpin everything we do: 1. Compassion: We approach our work with empathy and compassion, understanding the challenges faced by families dealing with memory loss. 2. Integrity: We uphold the highest standards of integrity, ensuring the confidentiality and security of patient information while fostering trust and transparency in all our interactions. 3. Collaboration: We believe in the power of collaboration and partnership, working closely with healthcare professionals, families, and communities to achieve our shared goals.",
    },
  ];
  
const AboutFC = () => {

  const {styles}=useStyles();

  return (
    <div className={styles.main}>
        <h1 className={styles.header}>ABOUT US</h1>
        <br/>
        <h4>GET IN THE KNOW ABOUT WHAT WE DO</h4>
        <div className={styles.container}>
        {cardsData.map((card, index) => (
          <Card key={index} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 18, fontWeight: "bold", letterSpacing:'.15em' }}>
                {card.title}
              </span>
            </div>
            <div style={{ marginBottom: 10 , textAlign:'center'}}>{card.content}</div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AboutFC;