import { View, Text, StyleSheet } from "@react-pdf/renderer";
import {
  SectionHeader,
  Section,
  SectionBody,
  SectionSubHeader,
} from "./sections";
import skills from "../../assets/skills.json";
import projects from "../../assets/projects.json";
import references from "../../assets/references.json";
import { Badge } from "./Badge";
import { BulletListItem } from "./BulletListItem";
import { Link } from "@react-pdf/renderer";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

function Body() {
  return (
    <View style={styles.main}>
      <View style={styles.sectionLeft}>
        <Section>
          <SectionHeader>
            <Text>General Information</Text>
          </SectionHeader>
          <SectionBody>
            <Text>
              Fullstack Developer with a frontend focus, skilled in <Text style={{ fontWeight: "bold" }}>React.js</Text> / <Text style={{ fontWeight: "bold" }}>Next.js</Text> and building modern, user-friendly interfaces. Experienced with <Text style={{ fontWeight: "bold" }}>Node.js</Text> and <Text style={{ fontWeight: "bold" }}>Express</Text> for backend development, delivering scalable APIs and robust architectures.
            </Text>
            <Text style={{ fontSize: 9, marginTop: 4}}>→ Fun fact: This CV is also coded by me with React/PDF renderer.</Text>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <Text>Projects</Text>
          </SectionHeader>
          <SectionBody style={{ flexDirection: "column", gap: 24 }}>
            {projects.map((project, i) => (
              <View key={i} style={{ gap: 4 }}>
                <SectionSubHeader>
                  <Link
                    src={project.link}
                    style={{
                      color: "inherit",
                      flexDirection: "row",
                      gap: 3,
                      alignItems: "center",
                    }}
                  >
                    <Text>{project.title}</Text>
                    <ExternalLinkIcon size={15} />
                  </Link>
                </SectionSubHeader>
                <Text>{project.description}</Text>
                {project.bullets.map((text, i) => (
                  <BulletListItem key={i} text={text} />
                ))}
              </View>
            ))}
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <Link
              src="https://portfolio-eta-lyart-79.vercel.app/"
              style={{
                color: "inherit",
                textDecoration: "none",
                fontSize: 9,
                marginTop: 7,
              }}
            >
              {" "}
              <Text>
                Explore more → https://portfolio-eta-lyart-79.vercel.app/
              </Text>
            </Link>
          </SectionBody>
        </Section>
      </View>
      <View style={styles.sectionRight}>
        <Section>
          <SectionHeader>
            <Text>Technical Skills</Text>
          </SectionHeader>
          <SectionBody
            style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}
          >
            {skills.map((skill) => (
              <Badge key={skill} skill={skill}></Badge>
            ))}
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <Text>Languages</Text>
          </SectionHeader>
          <SectionBody>
            <Text>
              Advanced level <Text style={{ fontWeight: "bold" }}>English</Text>
              , native in <Text style={{ fontWeight: "bold" }}>Turkish</Text>,
            </Text>
            <Text>
              conversational level{" "}
              <Text style={{ fontWeight: "bold" }}>Swedish</Text>.
            </Text>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <Text>Education</Text>
          </SectionHeader>
          <SectionBody style={{ flexDirection: "column", gap: 15 }}>
            <View style={{ gap: 6 }}>
              <SectionSubHeader>
                <Text style={{ fontSize: 11 }}>
                  Frontend Development Program, Code2Career Bootcamp
                </Text>
              </SectionSubHeader>
              <Text style={{ fontStyle: "italic" }}>
                Sweden, 2023 January - 2024 February
              </Text>
              <Text>
                Intensive, project-based program covering HTML, CSS, JavaScript,
                React, and responsive design. Completed real-world projects,
                collaborated in agile teams, and built a portfolio showcasing
                clean, maintainable code.
              </Text>
            </View>
            <View style={{ gap: 6 }}>
              <SectionSubHeader>
                <Text style={{ fontSize: 11 }}>
                  Bachelor's Degree In Teacher Training, Anadolu University
                </Text>
              </SectionSubHeader>
              <Text style={{ fontStyle: "italic" }}>Turkiye</Text>
            </View>
          </SectionBody>
        </Section>
        <Section>
          <SectionHeader>
            <Text>References</Text>
          </SectionHeader>
          <SectionBody>
            {references.map((reference) => (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {reference.name} , {reference.title}
                </Text>
                <Text>{reference.note}</Text>
              </View>
            ))}
            <Link
              src="https://drive.google.com/drive/folders/13GSq3RQpEgu8heIiTlmEhClYkZ9WX6Jl?usp=drive_link"
              style={{
                color: "inherit",
                flexDirection: "row",
                gap: 3,
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              <Text>Reference Letter</Text>
              <ExternalLinkIcon size={10} />
            </Link>
            <Text style={{ fontSize: 9, marginTop: 3 }}>
              Further information will be provided when requested.
            </Text>
          </SectionBody>
        </Section>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    backgroundColor: "#f7ede2",
  },
  sectionLeft: {
    width: "60%",
    padding: "20 20 20 30",
    gap: 20,
  },
  sectionRight: {
    width: "40%",
    backgroundColor: "#d6ccc2",
    padding: "20 30 20 20",
    gap: 20,
  },
});

export default Body;
