import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #131213;
  display: flex;
  @media screen and (max-width: 567px) {
    flex-direction: column;
  }
`
export const TaskContainer = styled.div`
  width: 40%;
  padding: 30px;
  @media screen and (max-width: 567px) {
    width: 100%;
    padding: 20px;
  }
`

export const TagHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 35px;
  color: #f3aa4e;
  text-align: center;
  @media screen and (max-width: 567px) {
    font-size: 25px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 567px) {
    margin-bottom: 20px;
  }
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  line-height: 1.6;
`

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  height: 35px;
  border-radius: 3px;
  padding: 5px;
`

export const Select = styled.select`
  border: none;
  outline: none;
  background-color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  height: 35px;
  border-radius: 3px;
`
export const Options = styled.option``

export const AddButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #f3aa4e;
  font-weight: bold;
  border-radius: 4px;
  margin-top: 30px;
  align-self: center;
  @media screen and (max-width: 567px) {
    padding: 7px 17px;
  }
`

export const TagListContainer = styled.div`
  background-color: #000000;
  flex-grow: 1;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
`
export const TagsContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
export const Tags = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
`
export const TagItem = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`
export const TagButton = styled.button`
  border: 1px solid #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  background-color: ${props => (props.activeTab ? '#f3aa4e' : 'transparent')};
  padding: 7px 16px;
  border-radius: 4px;
  cursor: pointer;
`
export const Tasks = styled.ul`
  padding-left: 0;
  list-style: none;
  flex-grow: 1;
`
export const NoTasks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const NoTasksText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  @media screen and (max-width: 567px) {
    font-size: 15px;
  }
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1a171d;
  margin-bottom: 7px;
  padding: 10px 10px;
  @media screen and (max-width: 567px) {
    padding: 7px 7px;
  }
`
export const Item = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  margin: 0;
`
export const ItemTag = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: #323f4b;
  border: none;
  background-color: #f3aa4e;
  border-radius: 10px;
  padding: 8px;
  margin: 0;
`
