import {Component} from 'react'
import {v4} from 'uuid'

import {
  AppContainer,
  TagHeading,
  TaskContainer,
  FormContainer,
  CustomContainer,
  Label,
  Input,
  Select,
  Options,
  TagListContainer,
  Tags,
  TagsContainer,
  TagItem,
  AddButton,
  TagButton,
  Tasks,
  NoTasks,
  NoTasksText,
  ListItem,
  Item,
  ItemTag,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Tag extends Component {
  state = {
    taskList: [],
    input: '',
    option: tagsList[0].optionId,
    activeTag: 'no',
  }

  onSubmitFrom = event => {
    const {input, option} = this.state

    event.preventDefault()
    const addTask = {
      id: v4(),
      task: input,
      tag: option,
    }
    this.setState(prev => ({
      taskList: [...prev.taskList, addTask],
      input: '',
      option: tagsList[0].optionId,
    }))
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
    // console.log(event.target.value)
  }

  onChangeTag = event => {
    this.setState({option: event.target.value})
    // console.log(event.target.value)
  }

  TagButton = event => {
    this.setState(prev => ({
      activeTag:
        prev.activeTag === event.target.value ? 'no' : event.target.value,
    }))
    // const {activeTag} = this.state
    // console.log(activeTag)
  }

  render() {
    const {input, taskList, activeTag, option} = this.state
    const filterList =
      activeTag === 'no'
        ? taskList
        : taskList.filter(eachItem => eachItem.tag === activeTag)
    // console.log(activeTag)
    return (
      <AppContainer>
        <TaskContainer>
          <FormContainer onSubmit={this.onSubmitFrom}>
            <TagHeading>Create a task!</TagHeading>
            <CustomContainer>
              <Label htmlFor="task">Task</Label>
              <Input
                type="text"
                id="task"
                value={input}
                onChange={this.onChangeInput}
                placeholder="Enter the Task here"
              />
            </CustomContainer>
            <CustomContainer>
              <Label htmlFor="tags">Tags</Label>
              <Select id="tags" onChange={this.onChangeTag} value={option}>
                {tagsList.map(each => (
                  <Options value={each.optionId} key={each.optionId}>
                    {each.displayText}
                  </Options>
                ))}
              </Select>
            </CustomContainer>
            <AddButton type="submit">Add Task</AddButton>
          </FormContainer>
        </TaskContainer>
        <TagListContainer>
          <Tags>Tags</Tags>
          <TagsContainer>
            {tagsList.map(each => (
              <TagItem key={each.optionId}>
                <TagButton
                  onClick={this.TagButton}
                  value={each.optionId}
                  activeTab={activeTag === each.displayText}
                >
                  {each.displayText}
                </TagButton>
              </TagItem>
            ))}
          </TagsContainer>
          <Tags>Tasks</Tags>
          <Tasks>
            {filterList.length > 0 ? (
              <>
                {filterList.map(each => (
                  <ListItem key={each.id}>
                    <Item>{each.task}</Item>
                    <ItemTag>{each.tag}</ItemTag>
                  </ListItem>
                ))}
              </>
            ) : (
              <NoTasks>
                <NoTasksText>No Tasks Added Yet</NoTasksText>
              </NoTasks>
            )}
          </Tasks>
        </TagListContainer>
      </AppContainer>
    )
  }
}
export default Tag
