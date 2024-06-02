import React, { useEffect, useState } from 'react';
import { Agents } from '../../../api-types/agents';
import {
  AbilityDescriptionContainer,
  AbilityThumbContainer,
  AbilitysWrapper,
  AgentInfoContainer,
  AgentTopSectionContainer,
  RoleInfofContainer,
} from './styles';
import useVisibility from '../../../hooks/useVisibility';
import { AgentHabilitysContainer } from '../styles';

// import { Container } from './styles';
interface AgentInfoProps {
  agent: Agents;
}
const AgentInfo: React.FC<AgentInfoProps> = ({ agent }) => {
  const [isVisible, containerRef] = useVisibility<HTMLDivElement>();
  const [selectedAbility, setSelectedAbility] = useState<number>(0);

  useEffect(() => {
    setSelectedAbility(0);
  }, [agent]);
  return (
    <AgentInfoContainer>
      <AgentTopSectionContainer isVisible={isVisible}>
        <img src={agent?.fullPortrait} alt={agent?.displayName} />
        <div className="info" ref={containerRef}>
          <p>// Role</p>
          <RoleInfofContainer>
            <div className="thumb">
              <img src={agent?.role.displayIcon} alt="" />
            </div>

            <p>{agent?.role.displayName}</p>
          </RoleInfofContainer>
          <h1>{agent?.displayName}</h1>
          <p>{agent?.description}</p>
        </div>
      </AgentTopSectionContainer>
      <AgentHabilitysContainer>
        <h1>Abilities</h1>
        <AbilitysWrapper className="abilities">
          {agent?.abilities.map((ability, index) => (
            <AbilityThumbContainer
              isSelected={selectedAbility === index}
              onClick={() => setSelectedAbility(index)}
              key={ability.displayName}
              className="ability"
            >
              <img src={ability.displayIcon} alt={ability.displayName} />
            </AbilityThumbContainer>
          ))}
        </AbilitysWrapper>
        {agent?.abilities.length > selectedAbility && (
          <AbilityDescriptionContainer>
            <h1>{agent?.abilities[selectedAbility].displayName}</h1>
            <p>{agent?.abilities[selectedAbility].description}</p>
          </AbilityDescriptionContainer>
        )}
      </AgentHabilitysContainer>
    </AgentInfoContainer>
  );
};

export default AgentInfo;
